import  { useContext } from "react";  
import GifsContext from "../../Context/GifsContext"

export default function useGlobalGif (){
     const {gifs} = useContext(GifsContext)
     return gifs
}