import {decode, encode } from "iconv-lite";
import {useState} from "preact/compat";

type MyProps = {}

function Base64(props: MyProps) {
    const [textInputValue, setTextInputValue] = useState("");
    const [encodingName, setEncodingName] = useState("UTF-8");

    const handleChange = (event) => {
        setTextInputValue(event.target.value);
    }

    const base64Encode = (text: string, encodingName: string): string => {
        try {
            const data: Buffer = encode(text, encodingName);
            const decodedString = decode(data, encodingName);
            if (text != decodedString) {
                return `Input contains characters outside of ${encodingName}`;
            }
            const binaryString = data.toString("binary");
            return btoa(binaryString);
        } catch (e) {
            return `Input contains characters outside of ${encodingName}`;
        }
    }

    return <>
        <div>Input Text</div>
        <textarea value={textInputValue} onChange={handleChange} cols={60}/>

        <div>Encoding:</div>
        <select value={encodingName} onChange={(event) => setEncodingName(event.target.value)}>
            <option>UTF-8</option>
            <option>ISO-8859-15</option>
            <option>ISO-8859-1</option>
            <option>ASCII</option>
            <option>win1251</option>
            <option>UTF-16LE</option>
            <option>UTF-16BE</option>
        </select>

        <div>Base 64:</div>
        <div id="base64-output">{base64Encode(textInputValue, encodingName)}</div>
    </>;
}

export default Base64;