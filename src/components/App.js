import React from 'react';

import HomeScreen from "./HomeScreen";
import Questions from "./Questions";

export default function App () {

    const [screen, setScreen] = React.useState('init');

    return (
        <>
            {
                screen === 'init' ? <HomeScreen setScreen={setScreen} /> : <Questions />
            }
        </>
    )
}