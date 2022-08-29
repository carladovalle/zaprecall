import React from 'react';
import styled from 'styled-components';

import turn from "./../assets/images/setinha.png" 

function Card ({number, index, tapCard}) {
    return (
        <Question>
            {number}
            <ion-icon name="play-outline" onClick = {() => tapCard(index)}></ion-icon>
        </Question>
    )
}

function CardQuestionn ({question, answer, index}) {

    const [flipped, setFlipped] = React.useState(false);
    const [state, setState] = React.useState("");

    const red = "#FF3030";
    const orange = "#FF922E";
    const green = "#2FBE34";

    if (state === "IDidNotRemember") {
        return (
            <QuestionAfterAnswering color={red}> 
                    Pergunta {index + 1}
                    <ion-icon name="close-circle"></ion-icon>
            </QuestionAfterAnswering>
        )
    }

    if (state === "IAlmostDidNotRemember") {
        return (
            <QuestionAfterAnswering color={orange}>
                Pergunta {index + 1}
                <ion-icon name="help-circle"></ion-icon>
            </QuestionAfterAnswering>
        )
    }

    if (state === "zap") {
        return (
            <QuestionAfterAnswering color={green}>
                Pergunta {index + 1}
                <ion-icon name="checkmark-circle"></ion-icon>
            </QuestionAfterAnswering>
        )
    }

    return (
        <>
            {!flipped ? (
                <FlashCard>
                    <h1>
                        {question}
                        <img src = {turn} onClick = {() => setFlipped(true)} />
                    </h1>
                </FlashCard>
            ) : <FlashCard>
                    <h1>
                        {answer}
                        <Buttons>
                            <Button color={red} border={red} onClick={() => {setState("IDidNotRemember")}}>Não lembrei</Button>
                            <Button color={orange} border={orange} onClick={() => setState("IAlmostDidNotRemember")}>Quase não lembrei</Button>
                            <Button color={green} border={green} onClick={() => setState("zap")}>Zap!</Button>
                        </Buttons>
                    </h1>
                </FlashCard>}
        </>
    )

}

export default function FlashCards({ 
    number,
    tap,
    index,
    tapCard,
    question,
    answer
}) {


    return (
        <>
          {
              !tap ? (
                  <Card 
                    key = {index}
                    number = {number}
                    index = {index}
                    tapCard = {tapCard}
                  />) : (
                    <CardQuestionn 
                        question = {question}
                        answer = {answer}
                        index = {index}
                  />)
          }      
        </>
    )
}

const FlashCard = styled.div`
    width: 299px;
    height: 131px;
    background-color: #FFFFD4;
    border-radius: 5px;
    color: #333333;
    font-size: 18px;
    margin-bottom: 25px;
    margin-top: 25px;

    h1 {
        margin-top: 18px;
        margin-left: 15px;
    }
    img {
        margin-top: 60px;
        margin-left: 254px;

        &:hover {
            cursor: pointer;
        }

    }
`
const Question = styled.li`
    width: 300px;
    height: 65px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    flex-direction: row;

    &:hover {
        cursor: pointer;
    }
`
const QuestionAfterAnswering = styled.li`
    width: 300px;
    height: 65px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    flex-direction: row;
    color: ${props => props.color};
    text-decoration-line: line-through;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 7.74px;
`
const Button = styled.button`
    width: 85.17px;
    height: 37.17px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
    border-radius: 5px;
    text-align: center;
    margin-left: 2px;
    background-color: ${props => props.color};
    border: ${props => props.color};

    &:hover {
        cursor: pointer;
    }
`