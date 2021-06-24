import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Home from './home'
import New from './new'
import Random from './random'
import Auth from './auth'
import {Header} from './style'

function Nav(){
   return (<Router>
      <Header>
         <nav>
            <ul className="target">
               <li><NavLink to="/" exact>Главная</NavLink></li>
               <li><NavLink to="/new" exact>Новинки</NavLink></li>
               <li><NavLink to="/random" exact>Случайное</NavLink></li>
               <li><NavLink to="/auth" exact>Вход</NavLink></li>
            </ul>
         </nav> 
         </Header>
         <Switch>
            <Route path="/auth"><Auth/></Route>
            <Route path="/new"><New/></Route>
            <Route path="/random"><Random/></Route>
            <Route path="/"><Home/></Route>
         </Switch>
</Router>)   
}
export default Nav