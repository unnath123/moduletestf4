import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import {post_start, success, failure} from './redux/actions/DicActions'

const Home = () =>{
  const {load, data, error} = useSelector(state => state)
  const[word, setWord] = useState("")
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch();
  const [istrue, setTrue] = useState(false)
  
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let data1 = await response.json();
        dispatch(success(data1[0]))
        // setWord("")
        console.log("data", data);
        console.log(load)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

   word && fetchData();
  }, [clicked]);

  function handleSubmit(e){
    e.preventDefault();
    setClicked(!clicked)
    setTrue(true)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setWord(e.target.value)}/>
        <button onClick={handleSubmit} type="submit">Search</button>
      </form>
      <h1>{word}</h1>
    {
      clicked && 
      <div>
        <div>
             <audio controls>
               <source src={data.phonetics[0].audio} type="audio/ogg" />
               <source src={data.phonetics[0].audio} type="audio/mpeg" />
             </audio>
           </div>
    
      </div>
    }
    </div>
  )
}

export default Home