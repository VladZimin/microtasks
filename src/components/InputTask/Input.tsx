import React, {ChangeEvent} from 'react'

type PropsType = {
    setInputValue: (inputValue: string) => void
    inputValue: string
}

export const Input = (props: PropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(e.currentTarget.value)
    }

    return (
        <input
            onChange={onChangeInputHandler}
            type="text"
            placeholder="Введите текст..."
            value={props.inputValue}
        />
    )
}
