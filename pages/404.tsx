import {PageWrapper} from "../components/PageWrapper/PageWrapper";
import {getLayout} from "../components/Layout/BaseLoayout/BaseLayout";
import styled from "styled-components";
import Image from "next/image";

const NotFound = () => {
	return (
		<PageWrapper>
		<ImageBlockText>
			404 NOT FOUND

		</ImageBlockText>
			<Image src='/NotFound/imgPage404.webp' alt={'страница не  найдена'} width={404} height={404} />
		</PageWrapper>
	)
}
NotFound.getLayout = getLayout
export default NotFound;

const ImageBlockText = styled.span`
    //font-size: 38px;
    //margin-right: 45px;
    //padding: 5px;
    //color: red;
    //border: 1px solid black;
    //height: 100%;
    //border-radius: 12px;
		
    font-family: 'Press Start 2P', cursive;
    font-size: 48px;
    color: #ff0000;
    text-align: center;
    margin-top: -50px;
    text-shadow: 2px 2px 4px #000000;
    background-color: #000;
    padding: 20px;
    border: 2px solid #ff0000;
    height: 100%;
`;