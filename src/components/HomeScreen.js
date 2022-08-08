import styled from 'styled-components';

export default function HomeScreen() {
    return(
        <Screen>
            <Image src="./images/logo.png" />
            <Name>ZapRecall</Name>
            <StartButton>Iniciar Recall</StartButton>
        </Screen>
    )
}

const Screen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Image = styled.img`
    width: 136px;
    height: 161px;
    margin-top: 148px;
`
const Name = styled.div`
    font-size: 36px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 13px;
    font-family: 'Righteous';
`
const StartButton = styled.div`
    width: 246px;
    height: 54px;
    background-color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #D70900;
    color: #D70900;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`