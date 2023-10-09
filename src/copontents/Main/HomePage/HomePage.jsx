import Step_2 from "./Step_2/Step_2";
import Step_1 from "./Step_1/Step_1";
import Step_3 from "./Step_3/Step_3";
import Step_4 from "./Step_4/Step_4";
import Root_Layout from '../../Layout/Root_Layout'

export default function HomePage() {
    return (
        <>
            {/* <Root_Layout>
                <Step_1/>
                <Step_2/>
                <Step_3/>
                <Step_4/>
            </Root_Layout> */}

            <Step_1/>
            <Step_2/>
            <Step_3/>
            <Step_4/>
        </>
    )
}