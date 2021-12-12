import React, { Component } from "react"
import "../sorting/sorting.css"
import "./database.css"

class Database extends Component {
    constructor(props) {
        super(props)
    }

    async printDB() {
        let obj = {
            headers: {
                "Content-Type":"application/json"
            }
        }
        
        let response = await fetch("http://localhost:5000/db/print", obj)
        let result = await response.json()

        console.log(result)
        for (let key in result) {
            console.log(result[key])
        }
    }

    render() {
        return(
            <>
                <div className='main'>
                    База данных дней рождений
                </div>
                <form method='post' className="send">
                    <input type='text' name='name' id='name' className="inp" />
                    <input type='text' name='phone' id='name' className="inp" />
                    <input type='date' name='date' id='date' className="inp" />
                    <input type='submit' value='Send' className="btn-send"/>
                </form>
                <button onClick={this.printDB}>
                    Показать ДБ
                </button>
            </>
        )
    }
}

export default Database;