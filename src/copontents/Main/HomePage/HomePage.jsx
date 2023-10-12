import Step_2 from "./Step_2/Step_2";
import Step_1 from "./Step_1/Step_1";
import Step_3 from "./Step_3/Step_3";
import Step_4 from "./Step_4/Step_4";
import Step_5 from "./Step_5/Step_5";
import Step_6 from "./Step_6/Step_6";

export default function HomePage() {
    return (
        <>
            <Step_1/>
            <Step_2/>
            <Step_3/>
            <Step_4/>
            <Step_5/>
            <Step_6 hours={20} minutes={50} seconds={10} />
        </>
    )
}