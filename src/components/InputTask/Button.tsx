import React from 'react'

type PropsType = {
    name: string
    callBack: () => void
}


export const Button = (props: PropsType) => {

    const onClickBtnHandler = () => {
        props.callBack()
    }

    return <button onClick={onClickBtnHandler}>{props.name}</button>
}
