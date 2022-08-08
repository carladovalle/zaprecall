import React from 'react';

import HomeScreen from "./HomeScreen";
import MainScreen from "./MainScreen";

export default function App () {

    const [screen, setScreen] = React.useState('init');

    return (
        <>
            {
                screen === 'init' ? <HomeScreen setScreen={setScreen} /> : <MainScreen />
            }
        </>
    )
}