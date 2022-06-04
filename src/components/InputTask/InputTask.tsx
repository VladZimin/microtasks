import React, {useState} from 'react'
import {Input} from './Input'
import {Button} from './Button'


export const InputTask = () => {

    let [message, setMessage] = React.useState([
        {message: 'blabla1'},
        {message: 'blabla2'},
        {message: 'blabla2'},
    ])

    let [inputValue, setInputValue] = useState('')

    const addMessage = () => {
        setMessage(prevState => [{message: inputValue}, ...prevState])
        setInputValue('')
    }

    return (
        <div>
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <Button name={'+'} callBack={addMessage}/>
            {
                message.map((msgObj, index) => <div key={index}>
                    {msgObj.message}
                </div>)
            }
        </div>
    )
}
