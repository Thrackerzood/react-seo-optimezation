import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Home from './home'
import New from './new'
import Random from './random'
import Auth from './auth'
import {Header} from './style'

function Nav(){
   function activeSidebar(){
      let sidebar = document.querySelector('.sidebar')
      document.body.classList.toggle('active_body_style')
      document.body.classList.toggle('deactive_body_style')
      sidebar.classList.toggle('sidebar_close')
      sidebar.classList.toggle('sidebar_open')
   }
   return (<Router>
      <Header onClick={activeSidebar} className="sidebar sidebar_close">
         <div></div>
         <nav>
            <ul activeclassname="active">
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