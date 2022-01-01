import Base64 from "./Base64";
import {JSX} from "preact";

export const App = (): JSX.Element => {
    return (
        <div>
            <h1>Base 64 Encoder</h1>
            <Base64/>
        </div>
    );
}
