import React, { useContext } from 'react'
import { FaSortDown } from 'react-icons/fa'
import sparkle from "../../assets/gemini_sparkle.svg"
import { CgMenuGridO } from 'react-icons/cg'
import Avatar from './Avatar'
import gemini from "../../assets/gemini_sparkle.svg"
import { LuImagePlus } from 'react-icons/lu'
import { MdMic } from 'react-icons/md'
import { IoSend } from 'react-icons/io5'
import { Context } from '../../context/Context'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, input, setInput } = useContext(Context);


    return (
        <div className='relative flex flex-col justify-between flex-1 min-h-screen pb-4 md:pb-8'>
            <nav id="navbar" className='flex items-center justify-between px-2 py-1'>
                <div id="navleft" className='p-1 px-2 leading-none bg-white rounded-lg cursor-pointer hover:bg-zinc-200'>
                    <div id="part-top-1" className='flex items-center gap-2'>
                        <h1 className='text-2xl'>Gemini</h1>
                        <span><FaSortDown /></span>
                    </div>
                    <p>1.5 Flash</p>
                </div>
                <div id="nav-right" className='flex items-center gap-5'>
                    <div id="btn" className='items-center hidden gap-2 p-2 px-5 text-sm bg-gray-200 rounded-lg md:flex cursor-pointerhover:bg-zinc-300'>
                        <img width={18} src={sparkle} alt="" />
                        <span className='font-semibold'>Try Gemini Advanced</span>
                    </div>
                    <span className='flex items-center justify-center rounded-full cursor-pointer w-9 h-9 hover:bg-zinc-300'>
                        <CgMenuGridO size={25} />
                    </span>
                    <div id="avatar" className='cursor-pointer'>
                        <Avatar />
                    </div>
                </div>
            </nav>
            {
                !showResult ? <center id="greet-container">
                    <h1
                        className="text-4xl font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text"
                    >
                        Hello, Syphar
                    </h1>
                </center> :
                    <div id='result' className='flex flex-col px-3 md:px-24 h-screen max-h-[70vh] overflow-y-scroll'>
                        <div id="result-title" className='flex gap-5 my-10'>
                            <Avatar />
                            <h1 className='text-xl font-medium text-zinc-900'>{recentPrompt}</h1>
                        </div>
                        <div id="result-body" className='flex items-start gap-5'>
                            <img src={gemini} alt="" />
                            {
                                loading ? <div className='flex flex-col w-full loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> : <p className='text-lg font-light leading-8' dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
            }

            <center id="input-container">
                <div id="search" className='flex items-center gap-5 p-2 border rounded-full border-zinc-800/40 w-fit'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-200'>
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
                            <span onClick={() => onSent()} className="flex items-center justify-center w-10 h-10 transition-all duration-300 ease-in-out transform rounded-full opacity-100 myfade hover:bg-zinc-200">
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
        </div>
    )
}

export default Main