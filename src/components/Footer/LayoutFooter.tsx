import React from 'react'
interface Props {
    children: React.ReactNode;
}

const LayoutFooter = (props: Props) => {
    return (
        <div>{props.children}</div>
    )
}

export default LayoutFooter