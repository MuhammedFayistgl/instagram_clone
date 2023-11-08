import { BsArrowLeft } from "react-icons/bs"

import { useNavigate } from "react-router-dom"




const HeaderIndividualChat = () => {
    const Navigate = useNavigate()
    return (
        <div className='flex flex-row justify-between  pt-3' >
            <span className='text-lg font-mono '>
                <span className='flex items-center gap-2'>
                    <BsArrowLeft className=' text-2xl cursor-pointer' onClick={() => Navigate(-1)} />
                    {/* <StorysProfile Profil_Url="" /> */}

                </span>
            </span>
            <div className='flex items-center gap-2'>

            </div>
        </div>
    )
}

export default HeaderIndividualChat