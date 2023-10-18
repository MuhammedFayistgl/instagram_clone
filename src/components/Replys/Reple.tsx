import Profile from '../Profile/Profile'
import Like from '../Like/Like'
import { useState } from 'react'
import { USER } from '../../Data/Data'
import moment from 'moment'

const Reple = () => {
    const [Toggle, setToggle] = useState<boolean>(false)
    return (
        <>
            <div className='text-center font-serif text-xs text-gray-400 cursor-pointer'
                onClick={() => setToggle(!Toggle)}

            >{Toggle ? 'Hide replies' : "view reply"} </div>
            {
                Toggle && (
                    USER?.flatMap(o => o.comments.flatMap(o => o.replys.map((reply) => {
                        const { REPLY, REPLY_USER_NAME ,TYME_STAMB} = reply
                        return (
                            <div className='flex  w-[100%] justify-between px-2'>

                                <span className='flex flex-row gap-2 '>

                                    <Profile />
                                    <div className='flex flex-col'>
                                        <div>{REPLY_USER_NAME} <span className='text-gray-400'>{  moment(TYME_STAMB).fromNow()}</span></div>
                                        <div>{REPLY}</div>
                                        <div className='text-gray-500 flex  gap-3 '> reply <span >copy</span>  <span >see trancilation</span></div>
                                    </div>
                                </span>
                                <Like />
                            </div>

                        )
                    })))

                )
            }

        </>
    )
}

export default Reple