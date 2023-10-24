import { Avatar } from '@mui/material'

import { ProfilePropsType } from '../../types/Type'
// import { Avatar } from 'rsuite'

const Profile = ({Profil_Url ,alt}: ProfilePropsType) => {
    return (
        <>
            <Avatar alt={alt} src={Profil_Url} />
        </>
    )
}

export default Profile