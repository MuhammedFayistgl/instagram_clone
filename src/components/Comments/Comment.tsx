import React from "react";
import { USER } from "../../Data/Data"
import moment from 'moment';


const Comment: React.FC = () => {





    return (
        <>
            {USER?.flatMap(o => o.comments.map(reply => {
                const { COMMENT_USER_NAME, COMMENT, TYME_STAMB } = reply
                return (
                    <div className='flex flex-col' key={reply.TYME_STAMB}>
                        <div>{COMMENT_USER_NAME} <span className='text-gray-400'>
                            {

                                moment(TYME_STAMB).fromNow()
                            }
                        </span></div>
                        <div>{COMMENT}</div>
                        <div className='text-gray-500 flex  gap-3 '> reply <span >copy</span>  <span >see trancilation</span></div>

                    </div>

                )
            }))}






        </>
    )
}

export default Comment