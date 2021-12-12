import React, { Component } from "react";
import { Routes, Route, Link } from 'react-router-dom'

import Sorting from "./components/sorting/Sorting.jsx";
import Database from "./components/Database/Database.jsx";
import Home from "./components/home/Home.jsx";
import NotFoundPage from "./components/nofoundpage/NotFoundPage.jsx";
import Game from "./components/game/Game.jsx";

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
          <Link to='/'>Главная</Link>
          <Link to='/sorting'>Сортировка</Link>
          <Link to='/db'>База данных</Link>
          <Link to='/game'>Игра</Link>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sorting' element={<Sorting />} />
          <Route path='/db' element={<Database />} />
          <Route path='/game' element={<Game />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </>
    )
  }
}

export default App;
