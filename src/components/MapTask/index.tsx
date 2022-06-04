import React from 'react'
import {MapTask} from './MapTask'

const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
]


export const AppMap = () => {
  return <MapTask cars={topCars} />
}