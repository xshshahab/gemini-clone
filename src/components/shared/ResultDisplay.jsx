import React from 'react';
import Avatar from '../Main/Avatar';
import gemini from "../../assets/gemini_sparkle.svg";

const ResultDisplay = ({ recentPrompt, loading, resultData }) => (
    <div className="flex flex-col px-3 md:px-24 h-screen max-h-[70vh] overflow-y-scroll">
        <div className="flex gap-5 my-10">
            <Avatar />
            <h1 className="text-xl font-medium text-zinc-900">{recentPrompt}</h1>
        </div>
        <div className="flex items-start gap-5">
            <img src={gemini} alt="" />
            {
                loading ? (
                    <div className="flex flex-col w-full loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                ) : (
                    <p className="text-lg font-light leading-8" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )
            }
        </div>
    </div>
);

export default ResultDisplay;
