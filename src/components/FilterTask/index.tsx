import React from 'react'
import {FilterTask} from './FilterTask'

export type FilterNamesType = 'all' | 'ruble' | 'dollar'



export const AppFilter = () => {

    const [money, setMoney] = React.useState([
        { banknote: 'Dollars', value: 100, number: ' a1234567890' },
        { banknote: 'Dollars', value: 50, number: ' z1234567890' },
        { banknote: 'RUBLES', value: 100, number: ' w1234567890' },
        { banknote: 'Dollars', value: 100, number: ' e1234567890' },
        { banknote: 'Dollars', value: 50, number: ' c1234567890' },
        { banknote: 'RUBLES', value: 100, number: ' r1234567890' },
        { banknote: 'Dollars', value: 50, number: ' x1234567890' },
        { banknote: 'RUBLES', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = React.useState<FilterNamesType>('all')

    let currentMoney = money

    if (filter === 'dollar') currentMoney = money.filter(moneyObj => moneyObj.banknote.toLowerCase() === 'dollars')
    if (filter === 'ruble') currentMoney = money.filter(moneyObj => moneyObj.banknote.toLowerCase() === 'rubles')

    const onClickFilterHandler = (filterName: FilterNamesType) => {
        setFilter(filterName)
    }

  return <FilterTask filter={currentMoney} callback={onClickFilterHandler} />
}
