import React from 'react'
import {FilterNamesType} from './index'


type FilterTaskPropTypes = {
    filter: FilterArrayPropsType[]
    callback: (filterName: FilterNamesType) => void
}

type FilterArrayPropsType = {
    banknote: string,
    value: number,
    number: string
}

export const FilterTask = (props: FilterTaskPropTypes) => {
    return (
        <>
            <ul>
                {
                    props.filter.map((moneyObj, index) => <li key={index}>
                        <span>{moneyObj.banknote} </span>
                        <span>{moneyObj.value}</span>
                        <span>{moneyObj.number}</span>
                    </li>)
                }
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.callback('all')}>all</button>
                <button onClick={() => props.callback('ruble')}>rubles</button>
                <button onClick={() => props.callback('dollar')}>dollars</button>
            </div>
        </>
    )
}
