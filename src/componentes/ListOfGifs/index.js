import React from "react"
import Gif from "../Gif"
import "./style.css"


export default function ListOfGifs ({ gifs }) {
  return <div className="ListOfGifs" >{ 
              gifs.map(({title,id,url}) => 
              <Gif 
                 key = {id}
                 title={title} 
                 url={url} 
                 id={id} 
              />
                )}
            </div>
            }

