import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import Navigation from '../shared/Navigation';
import Greeting from '../shared/Greeting';
import ResultDisplay from '../shared/ResultDisplay';
import InputContainer from '../shared/InputContainer';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, input, setInput } = useContext(Context);

    return (
        <div className="relative flex flex-col justify-between flex-1 min-h-screen pb-4 md:pb-8">
            <Navigation />
            {!showResult ? <Greeting name="Syphar" /> :
                <ResultDisplay recentPrompt={recentPrompt} loading={loading} resultData={resultData} />}
            <InputContainer input={input} setInput={setInput} onSent={onSent} />
        </div>
    );
};

export default Main;
