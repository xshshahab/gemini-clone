import React, { useContext, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { IoChatboxOutline, IoSettingsOutline } from 'react-icons/io5'
import { LuHistory } from 'react-icons/lu'
import { MdAdd } from 'react-icons/md'
import { RiMenu2Line } from 'react-icons/ri'
import { Context } from '../../context/Context'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)

    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const handleOpenSiderbar = () => {
        setExtended(!extended)
    }

    return (
        <div id='Sidebar' className='inline-flex flex-col justify-between min-h-screen px-4 py-2 bg-xBg'>
            <div id="top" className="pt-5">
                <span onClick={handleOpenSiderbar} className='items-center justify-center block p-2 rounded-full cursor-pointer bg-xBg w-9 h-9 hover:bg-zinc-300' >
                    <RiMenu2Line size={20} className='#12ed12' />
                </span>
                <div onClick={() => newChat()} id="new-chat" className='inline-flex items-center cursor-pointer gap-4 px-2 py-2 mt-10 bg-[#e6eaf1] rounded-3xl'>
                    <MdAdd size={25} color='#444' />
                    {extended ? <p className='pr-2 text-sm font-medium text-zinc-700'>New Chat</p> : null}
                </div>
                {
                    extended ? <div id="recent" className='flex flex-col'>
                        <p id="recent-title" className='mb-5 font-bold mt-7 text-zinc-700'>Recent</p>
                        {
                            previousPrompt.map((item, index) => {
                                return (
                                    <div onClick={() => loadPrompt(item)} key={index} id="recent-entry" className='flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-zinc-300 w-fit '>
                                        <IoChatboxOutline size={20} className='text-zinc-600' />
                                        <p className='font-medium text-zinc-600'>{item.slice(0, 15)} ...</p>
                                        <BsThreeDotsVertical size={25} className='p-1 rounded-full hover:bg-zinc-400 hover:text-zinc-800 text-xBg ' />
                                    </div>
                                )
                            })
                        }

                    </div> : null
                }

            </div>
            <div id="bottom" className="flex flex-col items-start gap-1 px-2 pt-4">
                {/* Help */}
                <div id="bottom-item" className="flex items-start justify-start w-full gap-4 p-2 rounded-md hover:bg-gray-200">
                    <IoMdHelpCircleOutline size={24} className="text-gray-600" />
                    {
                        extended ? <p className="font-medium text-gray-700">Help</p> : null
                    }
                </div>

                {/* Activity */}
                <div id="bottom-item" className="flex items-start w-full gap-4 p-2 rounded-md hover:bg-gray-200">
                    <LuHistory size={22} className="text-gray-600" />
                    {
                        extended ? <p className="font-medium text-gray-700">Activity</p> : null
                    }
                </div>

                {/* Settings */}
                <div id="bottom-item" className="flex items-center w-full gap-4 p-2 rounded-md hover:bg-gray-200">
                    <IoSettingsOutline size={22} className="text-gray-500" />
                    {
                        extended ? <p className="font-medium text-gray-700">Settings</p> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar