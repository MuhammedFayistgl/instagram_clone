import React from 'react'
import { ReelsProps } from '../../types/UtilsTypes'



const Vedio = ({ Src ,Size }: ReelsProps) => {
const widthsize = Size === "sm" ? '100%' : Size === "md" ? '100vh' : Size === "lg" ? '100vh' : '100vh'
const heightsize = Size === "sm" ? '100%' : Size === "md" ? '100vh' : Size === "lg" ? '100vh' : '100vh'
    return (
        <div>
            <video controls style={{width:'150%',minHeight:'100vh'}} src={Src}></video>
        </div>
    )
}

export default Vedio