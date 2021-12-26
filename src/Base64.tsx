import {useState} from "preact/compat";

type MyProps = {}

function Base64(props: MyProps) {
    const [myValue, setMyValue] = useState("");

    const handleChange = (event) => {
        setMyValue(event.target.value);
    }

    const base64Encode = (text: string): string => {
        try {
            return btoa(text);
        } catch (e) {
            // TODO add encoding, see for example https://github.com/ashtuchkin/iconv-lite
            return "< String contains characters outside of ISO-8859-1 >";
        }
    }

    return <>
        <div>Input Text (only characters from ISO-8859-1 allowed)</div>
        <textarea value={myValue} onChange={handleChange} cols={60}/>

        <div>Base 64:</div>
        <div id="base64-output">{base64Encode(myValue)}</div>
    </>;
}

export default Base64;