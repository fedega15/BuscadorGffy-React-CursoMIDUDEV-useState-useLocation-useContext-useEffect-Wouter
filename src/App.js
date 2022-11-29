import React from 'react'
import './App.css'
import Home from "./pages/Home"
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import {Link, Route, } from "wouter"
import StaticContext from './Context/StaticContext'
import { GifsContextProvider } from './Context/GifsContext'
import 'bootstrap/dist/css/bootstrap.css';
import image from "./Ricardo-Salinas.jpg"

export default function App() {
  return (  
    <StaticContext.Provider value={
      {
        name:"e",
        seguinos:true
      }}>
        <div className="App">
          <header className='header'> <Link to="/">
            <div>
            <img className='img' src={image}></img>
            </div>
            </Link>
          </header>    
          <section className="App-content">          
            <GifsContextProvider>
              <div>
                <Route 
                  component={Home}
                  path="/"
                />
                <Route
                  component={SearchResults}
                  path="/search/:keyword" 
                />
                <Route 
                  component={Detail}
                  path="/gif/:id"
                />  
              </div>
            
           </GifsContextProvider>
         </section>
         <footer className='footer'>     
              <div className='pagi'>
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
</div>           
            </footer>
        </div>  
    </StaticContext.Provider>
  )
}


