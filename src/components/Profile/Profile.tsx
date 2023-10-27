import { Avatar } from '@mui/material'
import { ProfilePropsType } from '../../types/Type'


const Profile = ({ Profil_Url, alt, Size }: ProfilePropsType) => {
    const size = {
        width: Size === 'sm' ? 24 : Size === 'md' ? 40 : Size === 'lg' ? 56 : Size === 'xl' ? 70 : 56,
        height: Size === 'sm' ? 24 : Size === 'md' ? 40 : Size === 'lg' ? 56 : Size === 'xl' ? 70 : 56,


    }
    return (
        <>
            <Avatar alt={alt} src={Profil_Url} sx={size} />
        </>
    )
}

export default Profile