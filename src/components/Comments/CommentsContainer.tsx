import { Divider } from '@mui/material'
import React from 'react'
import { CgLoadbar } from 'react-icons/cg'
import Profile from '../Profile/Profile'
import Comment from './Comment'
import Like from '../Like/Like'
import Reple from '../Replys/Reple'
const CommentsContainer = () => {
    return (
        <div>
            <div className=' '>
                <div className=' flex justify-center  flex-col items-center'>
                    <CgLoadbar className={'text-lg  '} />
                    <div className=''>
                        Comments
                    </div>
                    <Divider />
                    <div className='flex  w-[100%] justify-between px-2'>
                        <span className='flex flex-row gap-2 '>

                            <Profile />
                            <div >

                                <Comment />

                                <Reple />
                            </div>
                        </span>
                        <Like />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommentsContainer