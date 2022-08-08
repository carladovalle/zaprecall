import styled from 'styled-components';

export default function Questions() {

    const numbers = ['1','2','3','4','5','6','7','8'];

    return(
            <QuestionsScreen>
                {numbers.map(number => 
                    <Question>
                        Pergunta {number} 
                        <ion-icon class="icon" name="play-outline"></ion-icon>
                    </Question>)}
            </QuestionsScreen>
    )
}

const QuestionsScreen = styled.ul`
    margin-top: 33.96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 800px;
    overflow-y: scroll;
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