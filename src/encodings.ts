interface EncodingItem {
    value: string;
    name?: string;
}

interface EncodingGroup {
    name: string,
    items: EncodingItem[];
}

export const encodingGroups: EncodingGroup[] = [
    {
        name: 'Popular',
        items: [
            // I'd like to keep the same encodings also sorted into the appropriate category.
            // Here, each value is prefixed with "_" to avoid duplicate values.
            // Browser would accept duplicate values, but up/down keys would not work correctly.
            // iconv-lite uses only alphanumeric characters in the encoding name anyway, so it automatically ignores the leading "_".
            {value: '_UTF-8', name: 'UTF-8'},
            {value: '_ASCII', name: 'ASCII',},
            {value: '_ISO-8859-15', name: 'ISO-8859-15',},
            {value: '_ISO-8859-16', name: 'ISO-8859-16',},
            {value: '_Windows-1252', name: 'Windows-1252',},
        ]
    },
    {
        name: 'Unicode (-ish)',
        items: [
            {value: 'UTF-8'},
            {value: 'UTF-16BE'},
            {value: 'UTF-16LE'},
            {value: 'UTF-32LE'},
            {value: 'UTF-32BE'},
            {value: 'UCS-2'},
            // 'UCS-2LE', // Not working, created https://github.com/ashtuchkin/iconv-lite/issues/290
            // 'UCS-2BE', // "
            {value: 'UCS-4LE'},
            {value: 'UCS-4BE'},
            {value: 'CESU-8'},
            {value: 'UTF-7'},
        ]
    },
    {
        name: 'ISO',
        items: [
            {value: 'ISO-8859-1'},
            {value: 'ISO-8859-2'},
            {value: 'ISO-8859-3'},
            {value: 'ISO-8859-4'},
            {value: 'ISO-8859-5'},
            {value: 'ISO-8859-6'},
            {value: 'ISO-8859-7'},
            {value: 'ISO-8859-8'},
            {value: 'ISO-8859-9'},
            {value: 'ISO-8859-10'},
            {value: 'ISO-8859-11'},
            // 'ISO-8859-12' does not exist.
            {value: 'ISO-8859-13'},
            {value: 'ISO-8859-14'},
            {value: 'ISO-8859-15'},
            {value: 'ISO-8859-16'},
        ]
    },
    {
        name: 'Windows codepages / DOS',
        items: [
            {value: 'Windows-874'},
            {value: 'Windows-1250'},
            {value: 'Windows-1251'},
            {value: 'Windows-1252'},
            {value: 'Windows-1253'},
            {value: 'Windows-1254'},
            {value: 'Windows-1255'},
            {value: 'Windows-1256'},
            {value: 'Windows-1257'},
            {value: 'Windows-1258'},
            {value: 'cp720'},
        ]
    },
    {
        name: 'Mac codepages',
        items: [
            {value: 'maccroatian'},
            {value: 'maccyrillic'},
            {value: 'macgreek'},
            {value: 'maciceland'},
            {value: 'macroman'},
            {value: 'macromania'},
            {value: 'macthai'},
            {value: 'macturkish'},
            {value: 'macukraine'},
            {value: 'maccenteuro'},
            {value: 'macintosh'},
        ]
    },
    {
        name: 'Cyrillic',
        items: [
            {value: 'MIK'},
            {value: 'koi8-r'},
            {value: 'koi8-u'},
            {value: 'koi8-ru'},
            {value: 'koi8-t'},
        ]
    },
    {
        name: 'Japanese',
        items: [
            {value: 'Shift_JIS'},
            {value: 'Windows-31j'},
            {value: 'Windows932'},
            {value: 'EUC-JP'},
        ]
    },
    {
        name: 'Chinese',
        items: [
            {value: 'GB2312'},
            {value: 'GBK'},
            {value: 'GB18030'},
            {value: 'Windows936'},
            {value: 'EUC-CN'},
        ]
    },
    {
        name: 'Korean',
        items: [
            {value: 'KS_C_5601'},
            {value: 'Windows949'},
            {value: 'EUC-KR'},
        ]
    },
    {
        name: 'Taiwan/Hong Kong',
        items: [
            {value: 'Big5'},
            {value: 'Big5-HKSCS'},
            {value: 'Windows950'},
        ]
    },
    {
        name: 'Miscellaneous',
        items: [
            {value: 'armscii8'},
            {value: 'rk1048'},
            {value: 'tcvn'},
            {value: 'georgianacademy'},
            {value: 'georgianps'},
            {value: 'pt154'},
            {value: 'viscii'},
            {value: 'iso646cn'},
            {value: 'iso646jp'},
            {value: 'hproman8'},
            {value: 'tis620'},
        ]
    }
];

export const encoding2name = new Map<string, string>(
    encodingGroups
        .flatMap(group => group.items)
        .map(item => [item.value, item.name ?? item.value])
);
