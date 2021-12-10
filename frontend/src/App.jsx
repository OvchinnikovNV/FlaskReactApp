import React, { Component } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Sorting from "./components/sorting/Sorting.jsx";
import MyComponent from "./components/mycomponent/MyComponent.jsx";
import Home from "./components/home/Home.jsx";
import NotFoundPage from "./components/nofoundpage/NotFoundPage.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading ..."
    }
  }

  render() {
    return(
      <>
        <header>
          <Link to='/'>Home</Link>
          <Link to='/sorting'>Сортировка</Link>
          <Link to='/mycomponent'>MyComponent</Link>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sorting' element={<Sorting />} />
          <Route path='/mycomponent' element={<MyComponent />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </>
    )
  }
}

export default App;
