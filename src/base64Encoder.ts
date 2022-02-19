import {decode, encode} from "iconv-lite";
import { encoding2name } from "./encodings";

export function wrap(text: string, wrapAt: number): string {
    if (wrapAt <= 0) {
        throw Error("The number of characters the text should be wrapped at must be greater than 0.")
    }
    let result = "";
    let sep = ""
    for (let i = 0; i < text.length; i += wrapAt) {
        result += sep + text.substring(i, Math.min(i + wrapAt, text.length));
        sep = "\n";
    }
    return result;
}

export function base64Encode(text: string, encoding: string): string {
    try {
        const data: Buffer = encode(text, encoding);
        const decodedString = decode(data, encoding);
        if (text != decodedString) {
            return `Input contains characters outside of ${encoding2name.get(encoding)}`;
        }
        const binaryString = data.toString("binary");
        return btoa(binaryString);
    } catch (e) {
        return `Input contains characters outside of ${encoding2name.get(encoding)}`;
    }
}

export function base64EncodeLinesSeparately(textInputValue: string, encodingName: string): string {
    return (
        textInputValue
            .split(/\r\n|\r|\n/)
            .map(line => base64Encode(line, encodingName))
            .join("\n")
    );
}