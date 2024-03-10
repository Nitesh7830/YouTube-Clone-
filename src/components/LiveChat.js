import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chartSlice'
import ChatMessage from './ChatMessage'


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch()

    //suscribing to the store
    const ChatMessages = useSelector((store) => store.chat.messages)

    //calling api using api pooling (calling the api after 200ms)
    useEffect(() => {
        const t = setInterval(() => {
            //fetch api and add inito store
            console.log("hello from api pooling");

            dispatch(addMessage({
                name: "Niz",
                message: "lorem ipsum doller value tet "
            }))
        }, 1500)

        //clearing timeout
        return () => clearInterval(t)

    }, [])

    return (
        <>
            <div className='shadow-sm w-full bg-slate-100 p-2  h-[500px] overflow-y-scroll flex flex-col-reverse border-b-[1px] border-black'>
                <div>
                    {ChatMessages.map((cm, i) => <ChatMessage key={i} name={cm.name} message={cm.message} />)}
                </div>
            </div>
            <form className='border-t-1 border-black'
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                        addMessage({
                            name: "Nitesh Painuly",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }} >
                <div className='flex justify-center mt-5'>
                    <input
                        className='mr-2 border rounded-full outline-none focus:outline-none p-2 w-[340px]  font-placeholder-bold text-black font-serif'
                        placeholder='Chat...'
                        value={liveMessage}
                        onChange={(e) => setLiveMessage(e.target.value)}
                    />
                    <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-blue-700 transition-all duration-300 focus:outline-none focus:ring focus:border-blue-900">
                        Send
                    </button>

                </div>
            </form>
        </>
    )
}

export default LiveChat