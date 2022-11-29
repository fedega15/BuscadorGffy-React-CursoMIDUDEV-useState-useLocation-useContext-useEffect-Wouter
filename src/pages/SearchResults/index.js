import React from "react"
import Spinner from "../../componentes/Spinner"
import ListOfGifs from "../../componentes/ListOfGifs"
import useGifs from "../../componentes/hooks/useGifs"
import "./style.css"

export default function SearchResults ({ params }) {
    const  { keyword } = params
    const {loading, gifs} = useGifs({ keyword })
 

    return <div className="div">
                {loading 
                    ? <div className="spin"> <Spinner /> </div>
                    : <ListOfGifs gifs={gifs} />
                }
            </div>

}

