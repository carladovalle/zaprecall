import styled from 'styled-components';

export default function Footer () {
    return (
        <FooterScreen>
            0/4 CONCLUÍDOS
        </FooterScreen>
    )
}

const FooterScreen = styled.div`
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 46px;
    bottom: 0;
    left: 0;
    position: fixed;
`