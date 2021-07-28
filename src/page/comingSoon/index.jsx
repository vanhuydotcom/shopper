import useCountDown from "../../hoc/useCountDown";
import { CountDown } from "./component/CountDown";
import { Header } from "./component/Header";

export default function ComingSoon() {
    return (
        <>
            <Header />
            {
                useCountDown(CountDown, 99999)
            }
        </>
    )
}