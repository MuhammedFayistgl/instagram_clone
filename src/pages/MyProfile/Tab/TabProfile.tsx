import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BsColumnsGap } from 'react-icons/bs'
import { BsCollectionPlay } from 'react-icons/bs'
import { BiSolidUserPin } from 'react-icons/bi'
import ImagelistProfile from '../../../components/IMGlist/Imagelist';
import { Container } from '@mui/material';
const TabProfile = () => {
    const [value, setValue] = React.useState(0);


    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className='mt-3'>
            <Container>

                <Tabs variant='fullWidth' textColor='inherit' value={value} onChange={handleChange} aria-label="icon tabs example">
                    <Tab icon={<BsColumnsGap className=' text-2xl cursor-pointer' />} aria-label="phone" />
                    <Tab icon={<BsCollectionPlay className=' text-2xl cursor-pointer' />} aria-label="favorite" />
                    <Tab icon={<BiSolidUserPin className=' text-2xl cursor-pointer' />} aria-label="person" />
                </Tabs>
            </Container>
            <ImagelistProfile />
        </div>
    )
}

export default TabProfile