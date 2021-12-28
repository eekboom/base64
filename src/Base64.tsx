import {decode, encode} from "iconv-lite";
import {useState} from "preact/compat";

type MyProps = {}

function Base64(props: MyProps) {
    const [textInputValue, setTextInputValue] = useState("");
    const [wrapOutput, setWrapOutput] = useState(false);
    const [encodingName, setEncodingName] = useState("UTF-8");
    const wrapAt = 76;

    function handleInputChanged(event) {
        setTextInputValue(event.target.value);
    }

    function handleEncodingChanged(event) {
        setEncodingName(event.target.value);
    }

    function handleWrapOutputChanged(event) {
        setWrapOutput(!wrapOutput);
    }

    function wrap(text: string, wrapAt) {
        let result = "";
        let sep = ""
        for(let i = 0; i < text.length; i += wrapAt) {
            result += sep + text.substring(i, Math.min(i + wrapAt, text.length));
            sep = "\n";
        }
        return result;
    }

    const base64Encode = (text: string, encodingName: string): string => {
        try {
            const data: Buffer = encode(text, encodingName);
            const decodedString = decode(data, encodingName);
            if (text != decodedString) {
                return `Input contains characters outside of ${encodingName}`;
            }
            const binaryString = data.toString("binary");
            const base64 = btoa(binaryString);
            return wrapOutput ? wrap(base64, wrapAt) : base64;
        } catch (e) {
            return `Input contains characters outside of ${encodingName}`;
        }
    }

    return <>
        <div>Input Text</div>
        <textarea value={textInputValue} onChange={handleInputChanged} cols={80}/>

        <div>Encoding:</div>
        <select value={encodingName} onChange={handleEncodingChanged}>
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

        <div>Base 64:</div>
        <input id="wrap-output" type="checkbox" checked={wrapOutput} onClick={handleWrapOutputChanged}/>
        <label for="wrap-output">Wrap at 76 characters</label>
        <div><textarea id="base64-output" value={base64Encode(textInputValue, encodingName)} cols={80} readonly="readonly"/></div>
    </>;
}

export default Base64;