import {ComponentChildren, JSX, VNode} from "preact";
import classes from './Tabs.module.sass';
import {clz} from "../utilz";

interface TabsProps<TabCode> {
    tabCode: TabCode;
    onTabSelected: (tabCode: TabCode) => void;
    children: VNode[];
    className?: string;
}

export function Tabs<TabCodes>({children, onTabSelected, tabCode, className}: TabsProps<TabCodes>): JSX.Element {
    function handleTabSelected(code: TabCodes): void {
        onTabSelected(code);
    }

    return (
        <div className={clz(classes.tabs, className)}>
            <ul>
                {
                    children.map((item) => (
                        <TabHeader<TabCodes>
                            title={(item.props as TabProps<TabCodes>).title}
                            key={(item.props as TabProps<TabCodes>).code}
                            code={(item.props as TabProps<TabCodes>).code}
                            isSelected={(item.props as TabProps<TabCodes>).code === tabCode}
                            setSelectedTabCode={handleTabSelected}
                        />
                    ))
                }
            </ul>
            {children.filter(item => (item.props as TabProps<TabCodes>).code == tabCode)}
        </div>
    );
}

interface TabHeaderProps<TabCodes> {
    title: string;
    code: TabCodes;
    isSelected: boolean;
    setSelectedTabCode: (code: TabCodes) => void;
}

function TabHeader<TabKeys>({
                                title,
                                setSelectedTabCode,
                                isSelected,
                                code
                            }: TabHeaderProps<TabKeys>): JSX.Element {
    return (
        <li className={clz(isSelected && classes.selected)}
            onClick={(): void => setSelectedTabCode(code)}>
            {title}
        </li>
    );
}

interface TabProps<TabCodes> {
    title: string;
    code: TabCodes;
    children: ComponentChildren;
}

export function Tab<TabKeys>({children}: TabProps<TabKeys>): JSX.Element {
    return <>{children}</>;
}
