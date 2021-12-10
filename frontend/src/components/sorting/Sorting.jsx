import React, { Component } from "react"
import "./sorting.css"

class Sorting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: "None"
        }
        this.sendArrayToSort = this.sendArrayToSort.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.sendArrayToSort(event.target[0].value)
    }

    async sendArrayToSort(array) {
        let obj = {
            method: 'POST',
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify({
              'array': array,
            })
          }
      
          let response = await fetch("http://localhost:5000/sorting/", obj)
          let result = await response.json()

          this.setState({
              array: result.array
          })
    }

    render() {
        return(
            <div>
                <div className='main'>
                    Сортировка массива
                </div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input type='text'
                            placeholder='Задайте массив'
                            className='input'
                    />
                    <button type='submit'
                            className='btn'
                    >
                        Отсортировать
                    </button>
                </form>
                {this.state.array}
            </div>
        )
    }
}

export default Sorting;