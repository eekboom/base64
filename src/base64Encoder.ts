import {decode, encode} from "iconv-lite";
import { encoding2name } from "./encodings";

export function base64Encode(text: string, encoding: string): string {
    try {
        const data: Buffer = encode(text, encoding);
        const decodedString = decode(data, encoding);
        if (text != decodedString) {
            return `Input contains characters outside of ${encoding2name.get(encoding)}`;
        }
        const binaryString = data.toString("binary");
        return base64EncodeBinaryString(binaryString);
    } catch (e) {
        return `Input contains characters outside of ${encoding2name.get(encoding)}`;
    }
}

export function base64EncodeBinaryString(binaryString: string): string {
    const start = performance.now();
    const text = btoa(binaryString);
    const end = performance.now();
    console.log(`base64EncodeBinaryString took ${Math.round(end - start)}ms`);
    return text;
}

export function base64EncodeLinesSeparately(textInputValue: string, encodingName: string): string {
    return (
        textInputValue
            .split(/\r\n|\r|\n/)
            .map(line => base64Encode(line, encodingName))
            .join("\n")
    );
}

// Performance note:
// * for an input text opf 256MB, this method takes 700ms to 1200ms on my machine on both Firefox and Chrome
// * substring() vs. slice() makes no difference
// * also tried inserting newlines via regex, which is a little slower:
//     const result = text.replaceAll(/.{76}/g, "$&\n");
// * also tried collecting all lines in an array and then array.join("\") which also is a little slower
export function wrap(text: string, wrapAt: number): string {
    const start = performance.now();

    let result = "";
    let sep = ""
    for (let i = 0; i < text.length; i += wrapAt) {
        result += (sep + text.substring(i, i + wrapAt)); // second argument can get larger than text.length, but string.substring() does not care
        sep = "\n";
    }
    const end = performance.now();
    console.log(`Wrap took ${Math.round(end - start)}ms`);

    return result;
}
