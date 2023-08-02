import React, {useState} from "react";

export default function Search(){

    const[inputValue, setInputValue] =useState("")

const searhMovies= async (e)=>{
e.preventDefault()

try{
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2ee7df5e9a9849bfb5f047bbde626697&language=en-US&query=${inputValue}&page=1&include_adult=false`)
    
    const data = await res.json()
    console.log(data)
}
catch (error){
console.log(error)
}

}

    return(
        <div>
            <form className="form" onSubmit={searhMovies}>
            <label className="label" htmlFor="query">Movie Title:</label>
                <input type="text" className="input" name="query" placeholder="i.e. Little Mermaid"
                value={inputValue}
                onChange={(e)=>{
                    setInputValue(e.target.value)
                }}/>
                <button type="submit" className="button">Search Movie</button>
            </form>

        </div>
    )
}