import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className='home'>
            Данная страница не найдена.
        </div>
    )
  }
}

export default NotFoundPage;
