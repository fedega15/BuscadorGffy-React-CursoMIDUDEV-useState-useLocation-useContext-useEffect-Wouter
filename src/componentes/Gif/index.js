import React from "react"
import './Gif.css'
import { Link } from "wouter"

export default function Gif ({title, id , url}) {
    return (
        <div className="Gif">
        <Link to={`/gif/${id}`} className="Gif-link"  >             
                 
                  <br></br>            
                  <img loading="lazy" src={url} alt="title" />
               </Link>
               </div>

    )
}