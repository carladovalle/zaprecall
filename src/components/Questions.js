import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

import FlashCard from './FlashCard';

import ImageLogo from "./../assets/images/logo.png";

const deck = [
    { ask: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { ask: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { ask: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { ask: "Podemos colocar __ dentro do JSX", answer: "Expressões" },
    { ask: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na tela" },
    { ask: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { ask: "Usamos o props para __", answer: "Passar diferentes informações para componentes" },
    { ask: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
  ];

let questionsData = deck.map(value => {
    return {
        ...value,
        tap: false,
    }
});

questionsData = questionsData.sort(() => Math.random() - 0,5);

export default function Questions () {

    const [questions, setQuestions] = React.useState(questionsData);

    function tapCard (cardIndex) {
        let newQuestions = questions.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: true,
                }
            } else {
                return {
                    ...value,
                    tap: false,
                }
            }
        })
        setQuestions([...newQuestions]);
    }

    return(
        <Screen>
            <Logo>
                <img src={ImageLogo} />
                <h1>ZapRecall</h1>
            </Logo>
            <QuestionsScreen>
                {questions.map((value, index) =>
                            <FlashCard 
                                key = {index}
                                number = {`Pergunta ${index + 1}`} 
                                tap = {value.tap}
                                index = {index}
                                tapCard = {tapCard}
                                question = {value.ask}
                                answer = {value.answer}
                            />
                    )}
            </QuestionsScreen>
            <Footer />
        </Screen>
    )
}

const Screen = styled.div`
    width: 375px;
    height: 100%;
    background-color: #FB6B6B;
    font-family: 'Recursive', sans-serif;
    color: #333333;
`
const Logo = styled.div`
    display: flex;
    flex-direction: row;

    img {
        width: 52px;
        height: 60px;
        margin-top: 42px;
        margin-left: 59px;
    }
    h1 {
        font-size: 36px;
        font-weight: 400;
        color: #FFFFFF;
        margin-top: 48px;
        font-family: 'Righteous';
        margin-left: 15px;
    }
`
const QuestionsScreen = styled.ul`
    margin-top: 33.96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 810px;
    overflow-y: scroll;
`