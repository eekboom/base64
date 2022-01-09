import {useState} from "preact/hooks";
import {JSX} from "preact";

// Asked here how to type event handlers without accessing the JSXInternal package: https://github.com/preactjs/preact/discussions/3390
import {JSXInternal} from "preact/src/jsx";
import {base64Encode, base64EncodeLinesSeparately, wrap} from "./base64Encoder";
import TargetedEvent = JSXInternal.TargetedEvent;

function Base64(): JSX.Element {
    const [textInputValue, setTextInputValue] = useState("");
    const [wrapOutput, setWrapOutput] = useState(false);
    const [encodingName, setEncodingName] = useState("UTF-8");
    const [separatedLines, setSeparatedLines] = useState(false)

    const wrapAt = 76;

    function encodeTextInput(): string {
        if (separatedLines) {
            if (wrapOutput) {
                return "Invalid Configuration: It is not possible to select the 'wrap output' and 'encode lines separately' options together."
            }
            return base64EncodeLinesSeparately(textInputValue, encodingName);
        } else {
            const output = base64Encode(textInputValue, encodingName)
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
                    value={encodingName}
                    onChange={(event: TargetedEvent<HTMLSelectElement>): void => setEncodingName(event.currentTarget.value)}>
                <option>UTF-8</option>
                <option>ISO-8859-15</option>
                <option>ISO-8859-1</option>
                <option>ASCII</option>
                <option>win1251</option>
                <option>win1252</option>
                <option>UTF-16LE</option>
                <option>UTF-16BE</option>
                <option>UTF-32LE</option>
                <option>UTF-32BE</option>
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
        </form>
    );
}

export default Base64;