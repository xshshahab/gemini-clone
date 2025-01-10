import React from 'react';
import { FaSortDown } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';
import Avatar from '../Main/Avatar';
import sparkle from "../../assets/gemini_sparkle.svg";

const Navigation = () => (
    <nav className="flex items-center justify-between px-2 py-1">
        <div className="p-1 px-2 leading-none bg-white rounded-lg cursor-pointer hover:bg-zinc-100">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl">Gemini</h1>
                <span><FaSortDown /></span>
            </div>
            <p>1.5 Flash</p>
        </div>
        <div className="flex items-center gap-5">
            <div className="items-center hidden gap-2 p-2 px-5 text-sm rounded-lg cursor-pointer bg-gray-50 md:flex hover:bg-zinc-100">
                <img width={18} src={sparkle} alt="" />
                <span className="font-semibold">Try Gemini Advanced</span>
            </div>
            <span className="flex items-center justify-center rounded-full cursor-pointer w-9 h-9 hover:bg-zinc-100">
                <CgMenuGridO size={25} />
            </span>
            <div className="cursor-pointer">
                <Avatar />
            </div>
        </div>
    </nav>
);

export default Navigation;
