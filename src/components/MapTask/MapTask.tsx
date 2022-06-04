import React from 'react'

type MapTaskPropTypes = {
  cars: Array<CarsArrayPropsType>
}

type CarsArrayPropsType = {
  manufacturer: string,
  model: string
};


export const MapTask = (props: MapTaskPropTypes) => {
  return (

    <table>
      <tr>
        <th>Cars</th>
        <th>Model</th>
      </tr>
      {
        props.cars.map(carObj => <tr>
          <td>{carObj.manufacturer}</td>
          <td>{carObj.model}</td>
        </tr>)
      }
    </table>
  )
}