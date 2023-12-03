import { PageTemplateProps } from "../../components/Layout/Interfaces"

export const PageTemplate = ({Layout, Content}:PageTemplateProps) => {

    return (
        <Layout>
             <Content />
        </Layout>
    )
}