import React from 'react';
import { LuImagePlus } from 'react-icons/lu';
import { MdMic } from 'react-icons/md';
import { IoSend } from 'react-icons/io5';

const InputContainer = ({ input, setInput, onSent }) => (
    <center>
        <div className="flex items-center gap-5 p-2 border rounded-full border-zinc-800/40 w-fit">
            <span className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-200">
                <LuImagePlus size={25} />
            </span>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSent()}
                type="text"
                placeholder="Ask Gemini"
                className="w-[45vw] border-none outline-none"
            />

            {
                input ? (
                    <span onClick={onSent} className="flex items-center justify-center w-10 h-10 transition-all duration-300 ease-in-out transform rounded-full opacity-100 hover:bg-zinc-200">
                        <IoSend size={25} />
                    </span>
                ) : (
                    <span className="flex items-center justify-center w-10 h-10 transition-all duration-300 ease-in-out transform rounded-full opacity-100 hover:bg-zinc-200">
                        <MdMic size={25} />
                    </span>
                )
            }
        </div>
    </center>
);

export default InputContainer;
