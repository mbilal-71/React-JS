import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  //   console.log(response.data) xx data nhi dy ga await krwana pry ga
  //   const data = await response.json();
  //   console.log(data)

  // }

  //npm i axios run in terminal and them import on top

  // const getData = async () => {
  // const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
  // console.log(response)
  // console.log(response.data) //direct data dy dy ga
  // console.log(data)

  const [data, setData] = useState([])

  const getData = async () => {

    const response = await axios.get('https://picsum.photos/v2/list')
    // console.log(response.data)
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem) {

          return <h3> {elem.url}</h3>
        })}
      </div>
    </div>
  )
}


export default App