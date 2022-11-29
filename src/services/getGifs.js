

const apiKey="g1d3eL012C6wCs3MsOGvjLGJ56xpgcXJ&q"



export default function getGifs({keyword ="rick"} = {}){
    
    const apiURL =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=29&offset=0&rating=g&lang=en`

    return fetch(apiURL)
      .then (res => res.json())
      .then (response => {
            const {data} = response
            if (Array.isArray(data)){
                const gifs = data.map(image => {
                    const {images,title,id} = image
                    const {url} = images.fixed_width_downsampled
                    return {title,id,url }           
                })
                return gifs
            }
        }) 
}