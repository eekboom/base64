import {useMemo, useState} from "preact/hooks";
import {JSX} from "preact";
import {encodingGroups} from "./encodings";
import classes from './Base64.module.sass';

// Asked here how to type event handlers without accessing the JSXInternal package: https://github.com/preactjs/preact/discussions/3390
import {JSXInternal} from "preact/src/jsx";
import {base64Encode, base64EncodeBinaryString, base64EncodeLinesSeparately, wrap} from "./base64Encoder";
import {Tab, Tabs} from "./tabs/Tabs";
import {FileUpload} from "./file-upload/FileUpload";
import {clz, formatAsFileSize, isFileDragEvent} from "./utilz";
import TargetedEvent = JSXInternal.TargetedEvent;

const encodingOptions = encodingGroups.map(group => (
    <optgroup label={group.name}>
        {group.items.map(item => <option value={item.value}>{item.name ?? item.value}</option>)}
    </optgroup>
));

function Base64(): JSX.Element {
    const wrapAt = 76;
    const maxInputTextLength = 1_000_000;
    const maxOutputTextLength = maxInputTextLength * 4 / 3; // TODO: This is a bit buggy. With a 968KB file the output will disappear when wrap is ON.
    const maxInputFileSize = 256 * 1024 * 1024; // TODO Implement
    type TabCodes = "text-input" | "file-upload";
    const [selectedTab, setSelectedTab] = useState<TabCodes>("text-input")
    const [textInputValue, setTextInputValue] = useState("");
    const [file, setFile] = useState<File>(null);
    const [uploadedText, setUploadedText] = useState<string>();
    const [wrapOutput, setWrapOutput] = useState(false);
    const [encoding, setEncoding] = useState("_UTF-8");
    const [separatedLines, setSeparatedLines] = useState(false)
    const [base64ObjectUrl, setBase64ObjectUrl] = useState<string>(null); // TODO Try to generate this on the fly when the download button is clicked
    type CopyToClipboardState = "idle" | "copying" | "done" | "failed";
    const [copyToClipboardState, setCopyToClipboardState] = useState<CopyToClipboardState>("idle");

    // Does not speed up the file encoding much, but at least when on the "text-input" tab, processing is still very fast
    // even if a large file has previously been uploaded on the "file-upload" tab.
    const base64EncodedFileContent = useMemo(
        (): string => {
            if (!file) {
                return "";
            }
            if (uploadedText === undefined) {
                updateBase64ObjectUrl(null);
                return "... loading ...";
            }
            const output = base64EncodeBinaryString(uploadedText);
            return wrapOutput ? wrap(output, wrapAt) : output;
        },
        [
            file, uploadedText, wrapOutput
        ]
    );
    const base64EncodedInputText = useMemo(
        () => {
            if (separatedLines) {
                if (wrapOutput) {
                    updateBase64ObjectUrl(null);
                    return "Invalid Configuration: It is not possible to select the 'wrap output' and 'encode lines separately' options together."
                }
                return base64EncodeLinesSeparately(textInputValue, encoding);
            } else {
                const output = base64Encode(textInputValue, encoding);
                return wrapOutput ? wrap(output, wrapAt) : output;
            }
        },
        [textInputValue, wrapOutput, encoding, separatedLines]
    );
    const base64Text = useMemo(
        (): string => {
            const text = (selectedTab == "text-input" ? base64EncodedInputText : base64EncodedFileContent);
            setCopyToClipboardState('idle');
            updateBase64ObjectUrl(text);
            return text;
        },
        [selectedTab, base64EncodedInputText, base64EncodedFileContent]
    );

    function textToObjectUrl(text?: string): string | null {
        if (!text) {
            return null;
        }
        return URL.createObjectURL(new Blob([new TextEncoder().encode(text).buffer], {type: 'application/base64'}));
    }

    function updateBase64ObjectUrl(text: string): void {
        const start = performance.now();
        if (base64ObjectUrl != null) {
            URL.revokeObjectURL(base64ObjectUrl);

            setBase64ObjectUrl(null);
        }
        setBase64ObjectUrl(textToObjectUrl(text));
        const end = performance.now();
        console.log(`Updating base64 object url took ${Math.round((end - start))}ms`);
    }

    function handleWrapOutputClicked(): void {
        const newWrapOutput = !wrapOutput;
        // wrap output and separated lines are mutually exclusive features
        if (separatedLines && newWrapOutput) {
            setSeparatedLines(false)
        }
        setWrapOutput(newWrapOutput);
    }

    function handleSeparatedLinesClicked(): void {
        const newSeparatedLines = !separatedLines;
        // wrap output and separated lines are mutually exclusive features
        if (wrapOutput && newSeparatedLines) {
            setWrapOutput(false);
        }
        setSeparatedLines(newSeparatedLines)
    }

    function handleFileSelected(file: File): void {
        setFile(file);
        setUploadedText(undefined);
        if (file != null) {
            const fileReader = new FileReader();
            fileReader.readAsBinaryString(file); // TODO: Don't use a binary string. That takes twice as much memory as needed.
            fileReader.onload = function (e): void {
                console.warn("File loaded");
                console.warn("File loaded Event", e);
                console.warn("File loaded Reader", fileReader);
                console.warn("File loaded result length", (fileReader.result as string).length);
                setUploadedText(fileReader.result as string);
            }
            fileReader.onerror = function (): void {
                console.warn("Failed to read file");
            }
        }
    }

    // Switch to the "File Upload" tab when the user is dragging over the tab area.
    // (I found I accidentally did that a lot.)
    function handleTextAreaDragEnter(e: DragEvent): void {
        if (isFileDragEvent(e)) {
            setSelectedTab("file-upload");
        }
    }

    function copyBase64ToClipboard(e: Event): void {
        e.preventDefault();
        e.stopPropagation();
        setCopyToClipboardState("copying");
        navigator
            .clipboard
            .writeText(base64Text)
            .then(() => {
                console.info("Copied to clipboard");
                setCopyToClipboardState("done");
            })
            .catch(() => {
                console.warn("Failed to copy to clipboard");
                setCopyToClipboardState("failed");
            })
    }

    function getDownloadFileName(): string {
        return (selectedTab === "file-upload" && file) ? file.name + ".b64" : "text.b64";
    }

    return (
        <form className={classes.base64}>
            <header>Base 64 Encoder</header>

            <Tabs<TabCodes> className={classes.inputTabs} tabCode={selectedTab} onTabSelected={setSelectedTab}>
                <Tab<TabCodes>
                    code="text-input"
                    title="Text Input"
                >
                    {/*<label htmlFor="textInput">Enter Text</label> */}
                    <textarea id="textInput"
                              onDragEnter={handleTextAreaDragEnter}
                              maxLength={maxInputTextLength}
                              value={textInputValue}
                              onInput={(event: TargetedEvent<HTMLTextAreaElement>): void => setTextInputValue(event.currentTarget.value)}
                              spellCheck={false}
                              autocomplete="off"/>
                </Tab>
                <Tab<TabCodes>
                    code="file-upload"
                    title="File Upload"
                >
                    <FileUpload className={classes.fileUpload}
                                maxFileSize={maxInputFileSize}
                                file={file}
                                setFile={handleFileSelected}/>
                </Tab>
            </Tabs>

            <hr/>

            <label htmlFor="encoding-select"
                   className={clz((selectedTab === "file-upload") && "disabled")}>
                Encoding
            </label>
            <select id="encoding-select"
                    value={encoding}
                    disabled={selectedTab === "file-upload"}
                    onChange={(event: TargetedEvent<HTMLSelectElement>): void => setEncoding(event.currentTarget.value)}>
                {encodingOptions}
            </select>

            <label htmlFor="encode-lines"
                   className={clz((selectedTab === "file-upload") && "disabled")}>
                Encode each line separately
            </label>
            <input id="encode-lines"
                   type="checkbox"
                   disabled={selectedTab === "file-upload"}
                   checked={separatedLines && selectedTab === "text-input"}
                   onClick={handleSeparatedLinesClicked}/>

            <label htmlFor="wrap-output">Wrap at {wrapAt} characters</label>
            <input id="wrap-output" type="checkbox" checked={wrapOutput} onClick={handleWrapOutputClicked}/>

            <hr/>

            <label htmlFor="base64-output">Base 64</label>
            <textarea id="base64-output"
                      value={
                          base64Text
                              ? (
                                  base64Text.length < maxOutputTextLength
                                      ? base64Text
                                      : "... text too large (limit is " + formatAsFileSize(maxOutputTextLength, 1) + ") - use 'Download' or 'Copy to Clipboard' button below ..."
                              )
                              : ""
                      }
                      readonly
                      spellcheck={false}
                      autocomplete="off"/>

            <div className={classes.buttonBar}>
                {/********** Download *********/}
                <a id="base64-download"
                   download={getDownloadFileName()}
                   className={
                       clz(
                           "button",
                           !base64ObjectUrl && "disabled",
                           (base64Text && !!base64ObjectUrl) && "loading"
                       )
                   }
                   href={base64ObjectUrl}
                   disabled={!base64ObjectUrl}
                >
                    Download
                </a>

                {/********** Copy to Clipboard *********/}
                {
                    navigator?.clipboard?.writeText &&
                    <button id="copy-to-clipboard"
                            disabled={!base64Text || copyToClipboardState === 'copying'}
                            className={clz(!base64Text && "disabled")}
                            onClick={(e): void => copyBase64ToClipboard(e)}
                    >
                        Copy to Clipboard
                    </button>
                }
                {(copyToClipboardState === 'copying') && <span>Copying ...</span>}
                {(copyToClipboardState === 'done') && <span>Copied!</span>}
                {(copyToClipboardState === 'failed') && <span>Failed to copy!</span>}
            </div>
        </form>
    );
}

export default Base64;