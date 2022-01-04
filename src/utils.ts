import {decode, encode} from "iconv-lite";

export function wrap(text: string, wrapAt: number): string {
    let result = "";
    let sep = ""
    for(let i = 0; i < text.length; i += wrapAt) {
        result += sep + text.substring(i, Math.min(i + wrapAt, text.length));
        sep = "\n";
    }
    return result;
}

export function base64Encode(text: string, encodingName: string): string {
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

export function base64EncodeLinesSeparately(textInputValue: string, encodingName: string): string {
    return textInputValue.split(/\r\n|\r|\n/)
        .map(line => base64Encode(line, encodingName))
        .join("\n");
}