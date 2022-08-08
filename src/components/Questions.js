import styled from 'styled-components';

export default function Questions() {
    return(
            <QuestionsScreen>
                <Question>
                    Pergunta 1
                    <ion-icon class="icon" name="play-outline"></ion-icon>
                </Question>
                <Question>
                    Pergunta 2
                    <ion-icon class="icon" name="play-outline"></ion-icon>
                </Question>
                <Question>
                    Pergunta 3
                    <ion-icon class="icon" name="play-outline"></ion-icon>
                </Question>
                <Question>
                    Pergunta 4
                    <ion-icon class="icon" name="play-outline"></ion-icon>
                </Question>
            </QuestionsScreen>
    )
}

const QuestionsScreen = styled.ul`
    margin-top: 33.96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 414px;
`
const Question = styled.li`
    width: 300px;
    height: 56px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    flex-direction: row;
`