import React, { useState } from 'react'
import { Rate } from 'rsuite'

const Like = () => {
    const [Like, setlike] = useState(0)
    return (
        <Rate max={1} size='sm' color='red' value={Like} character="❤" onChange={setlike} />
    )
}

export default Like