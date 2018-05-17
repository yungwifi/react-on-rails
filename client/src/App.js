import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ArtistList from "./components/ArtistList"
import Artist from "./components/Artist"
import styled from 'styled-components'

const NavBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
flex-direction: row;
padding: 10px auto;
background-color: #368BFF;
box-shadow: 0px 3px 3px rgba(0,0,0,0.5);`

const NavItem = styled.div`
margin-left: 30px;
margin-right: 45px;
color: white;
font-family: 'Roboto Condensed', sans-serif;
a{
  color: white;
  text-decoration: none;
  
}
a:hover{
 color: blue; 
}`

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar >
            <NavItem >
              <h1>Tunr</h1>
            </NavItem>
            <NavItem>
              <div><Link to="/">All Artists</Link></div>
            </NavItem>
          </NavBar>

          <Route exact path="/" component={ArtistList} />
          <Route path="/artist/:id" component={Artist} />

        </div>
      </Router>
    );
  }
}

export default App
