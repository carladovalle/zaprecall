import styled from 'styled-components';
import Questions from './Questions';
import Footer from './Footer';

export default function HomeScreen() {
    return(
        <Screen>
            <Logo>
                <Image src="./images/logo.png" />
                <Name>ZapRecall</Name>
            </Logo>
            <Questions />
            <Footer />
        </Screen>
    )
}

const Screen = styled.div`
    width: 375px;
    height: 597px;
    background-color: #FB6B6B;
    font-family: 'Recursive', sans-serif;
    color: #333333;
`
const Logo = styled.div`
    display: flex;
    flex-direction: row;
`
const Image = styled.img`
    width: 52px;
    height: 60px;
    margin-top: 42px;
    margin-left: 59px;
`
const Name = styled.div`
    font-size: 36px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 48px;
    font-family: 'Righteous';
    margin-left: 15px;
`