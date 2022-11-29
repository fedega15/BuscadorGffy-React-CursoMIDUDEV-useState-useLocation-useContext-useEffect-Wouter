import React  from "react"
import Gif from "../../componentes/Gif"
import useGlobalGifs from "../../componentes/hooks/UseGlobalGifs"
export default function Detail ({params}) {
    const gifs = useGlobalGifs()


    const gif = gifs.find(singleGif => 
      singleGif.id === params.id
    )
    console.log(gif)
 
 
  //console.log(params.id)
    return <Gif {...gif} />
}