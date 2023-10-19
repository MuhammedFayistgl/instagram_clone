
import { useState } from 'react'
import { Rate } from 'rsuite'

const Like = () => {
    const [Like, setlike] = useState(1)
    return (
        <Rate size='sm' max={1} color='red' value={Like} character="❤" onChange={setlike}
        />
    )
}

export default Like