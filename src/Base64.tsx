import {useState} from "preact/hooks";
import {JSX} from "preact";
import {encodingGroups} from "./encodings";

const encodingOptions = encodingGroups.map(group => (
    <optgroup label={group.name}>
        {group.items.map(item => <option value={item.value}>{item.name ?? item.value}</option>)}
    </optgroup>
));

// Asked here how to type event handlers without accessing the JSXInternal package: https://github.com/preactjs/preact/discussions/3390
import {JSXInternal} from "preact/src/jsx";
import {base64Encode, base64EncodeLinesSeparately, wrap} from "./base64Encoder";
import TargetedEvent = JSXInternal.TargetedEvent;

function Base64(): JSX.Element {
    const [textInputValue, setTextInputValue] = useState("");
    const [wrapOutput, setWrapOutput] = useState(false);
    const [encoding, setEncoding] = useState("_UTF-8");
    const [separatedLines, setSeparatedLines] = useState(false)
    const wrapAt = 76;

    function encodeTextInput(): string {
        if (separatedLines) {
            if (wrapOutput) {
                return "Invalid Configuration: It is not possible to select the 'wrap output' and 'encode lines separately' options together."
            }
            return base64EncodeLinesSeparately(textInputValue, encoding);
        } else {
            const output = base64Encode(textInputValue, encoding)
            return wrapOutput ? wrap(output, wrapAt) : output;
        }
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

    function copyBase64ToClipboard(): void {
        navigator
            .clipboard
            .writeText(encodeTextInput())
            .catch(() => console.warn("Failed to copy to clipboard"))
    }

    return (
        <form id="base64">
            <header>Base 64 Encoder</header>

            <label htmlFor="text-input">Input Text</label>
            <textarea id="text-input"
                      value={textInputValue}
                      onInput={(event: TargetedEvent<HTMLTextAreaElement>): void => setTextInputValue(event.currentTarget.value)}
                      spellcheck={false}/>

            <label htmlFor="encoding-select">Encoding</label>
            <select id="encoding-select"
                    value={encoding}
                    onChange={(event: TargetedEvent<HTMLSelectElement>): void => setEncoding(event.currentTarget.value)}>
                {encodingOptions}
            </select>

            <label htmlFor="encode-lines">Encode each line separately</label>
            <input id="encode-lines" type="checkbox" checked={separatedLines} onClick={handleSeparatedLinesClicked}/>

            <label htmlFor="wrap-output">Wrap at {wrapAt} characters</label>
            <input id="wrap-output" type="checkbox" checked={wrapOutput} onClick={handleWrapOutputClicked}/>

            <hr/>

            <label htmlFor="base64-output">Base 64</label>
            <textarea id="base64-output"
                      value={encodeTextInput()}
                      readonly
                      spellcheck={false}/>

            {navigator?.clipboard?.writeText && <button id="copy-to-clipboard" type="button" onClick={copyBase64ToClipboard}>Copy to Clipboard</button>}
        </form>
    );
}

export default Base64;