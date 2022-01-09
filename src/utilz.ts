function round(number: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}

export function formatAsFileSize(number: number, decimalPlaces = 0): string {
    const suffixes = ['Byte', 'KB', 'MB', 'GB', 'TB'];
    const k = 1024;

    let divisor = 1;
    let i = 0;
    while(i < suffixes.length - 1 && divisor * k < number) {
        divisor *= k;
        ++i;
    }

    return `${round(number / divisor, decimalPlaces)} ${suffixes[i]}`;
}

/**
 * Little helper function meant to be used in className attributes like so
 * @example
 * className={clz(
 *     "uploadButton", // class that is always present
 *     someVariable, // added if someVariable actually has a non empty-string
 *     condition && someString // only added if condition is true
 * )}
 */
export const clz = (...classes: (boolean|string)[]): string => classes.filter(Boolean).join(' ');

export function isFileDragEvent(e: DragEvent): boolean {
    return e.dataTransfer.types && e.dataTransfer.types.indexOf("Files") !== -1;
}
