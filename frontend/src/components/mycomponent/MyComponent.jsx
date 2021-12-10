import React, { Component } from "react"
import "../sorting/sorting.css"

class MyComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div className='main'>
                    Ещё какой-то компонент
                </div>
                <div>
                    <form method='post'>
                        <input type='text' name='name' id='name' />
                        <input type='text' name='phone' id='name' />
                        <input type='date' name='date' id='date' />
                        <input type='submit' value='Send'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default MyComponent;