import React, { useState  } from "react"
import { Link, useLocation } from "wouter"
import getGifs from "../../services/getGifs"
import ListOfGifs from "../../componentes/ListOfGifs"
import useGifs from "../../componentes/hooks/useGifs"
import "./style.css"

const POPULAR_GIFS =["grego","youtube", "federico", "Matrix", "Colombia", "Rusia","Riquelme","Maradona" , "Ronaldo","Gimnasio", "Villalobos", "Wade"]

export default function Home ( ){
    const [keyword, setKeyword] = useState("")
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()


    const handleSumbit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
      
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <div >
            <div  >
           
            <h3 className="cont-l">Los gifs mas populares</h3>
         
            <ol class="list-group list-group-numbered">
            <ul className="cont" >
                {POPULAR_GIFS.map((popularGif) => (
                    <li className="list-group-item list-group-item-dark" key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link> 
                    </li>     
                ))}
            </ul>
</ol>
            <form onSubmit={handleSumbit}>
                <div className="cont-sis">
                < input className="cont-siste" placeholder="Busca tu gif preferido" onChange={handleChange} type="text" value={keyword}></input>
                <button className="cont-sisteb">Buscar!</button>   
                </div>                          
            </form>
            <div className="cont-s">
            <h3  >TU ULTIMA BUSQUEDA</h3>
            </div>
              <ListOfGifs gifs={gifs} />
              </div>
        </div>
    )
}