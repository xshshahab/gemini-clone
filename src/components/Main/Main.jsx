import React, { useState } from 'react'
import { FaSortDown } from 'react-icons/fa'
import sparkle from "../../assets/gemini_sparkle.svg"
import { CgMenuGridO } from 'react-icons/cg'
import Avatar from './Avatar'
import { LuImagePlus } from 'react-icons/lu'
import { MdMic } from 'react-icons/md'
import { IoSend } from 'react-icons/io5'

const Main = () => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    return (
        <div className='flex-1 justify-between flex flex-col pb-10 min-h-screen relative'>
            <nav id="navbar" className='flex px-2 py-1 justify-between items-center'>
                <div id="navleft" className='leading-none cursor-pointer bg-white hover:bg-zinc-200 px-2 p-1 rounded-lg'>
                    <div id="part-top-1" className='flex items-center gap-2'>
                        <h1 className='text-2xl'>Gemini</h1>
                        <span><FaSortDown /></span>
                    </div>
                    <p>1.5 Flash</p>
                </div>
                <div id="nav-right" className='flex items-center gap-5'>
                    <div id="btn" className='flex items-center gap-2 bg-gray-200 hover:bg-zinc-300 cursor-pointer text-sm px-5 p-2 rounded-lg'>
                        <img width={18} src={sparkle} alt="" />
                        <span className='font-semibold'>Try Gemini Advanced</span>
                    </div>
                    <span className='w-9 flex items-center justify-center h-9 hover:bg-zinc-300 cursor-pointer rounded-full'>
                        <CgMenuGridO size={25} />
                    </span>
                    <div id="avatar" className='cursor-pointer'>
                        <Avatar />
                    </div>
                </div>

            </nav>
            <center id="greet-container">
                <h1
                    className="text-3xl font-medium bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text text-transparent"
                >
                    Hello, Syphar
                </h1>
            </center>

            <center id="input-container">
                <div id="search" className='border p-2 rounded-full flex items-center gap-5 w-fit'>
                    <span className='hover:bg-zinc-200 w-10 h-10 rounded-full flex items-center justify-center'>
                        <LuImagePlus size={25} />
                    </span>
                    <input
                        type="text"
                        placeholder="Ask Gemini"
                        className="w-[45vw] border-none outline-none"
                        value={input}
                        onChange={handleInputChange}
                    />
                    {/* Conditional rendering with animation */}
                    {input.length === 0 ? (
                        <span className="hover:bg-zinc-200 w-10 h-10 rounded-full flex items-center justify-center transition-all transform duration-300 ease-in-out opacity-100 hover:scale-110">
                            <MdMic size={25} />
                        </span>
                    ) : (
                        <span className="hover:bg-zinc-200 w-10 h-10 rounded-full flex items-center justify-center transition-all transform duration-300 ease-in-out opacity-100 hover:scale-110">
                            <IoSend size={25} />
                        </span>
                    )}
                </div>
            </center>
        </div>
    )
}

export default Main