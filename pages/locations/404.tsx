import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {getLayout} from "../../components/Layout/BaseLoayout/BaseLayout";

const NotFound=()=>{
	return <PageWrapper>404 NOT FOUND</PageWrapper>
}
NotFound.getLayout = getLayout
export default NotFound;