import * as React from 'react';
import './style.css';
import Axios from 'axios';
import {useState,useEffect} from 'react';

export default function App() {
  const[name,setname]=useState('');
  const[predictage,setpredictage]=useState(null);

  const fetchdata=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setpredictage(res.data)
    })
  }
  return (
    <div>
       <input type="text" placeholder='Type a name' onChange={(e)=>{
         setname(e.target.value);
       }}/>

       <button onClick={fetchdata}>Predict Age</button>

       <h1>Name: {predictage?.name}</h1>
       <h1>Predicted Age: {predictage?.age}</h1>
       <h1>Count: {predictage?.count}</h1>


    </div>
  );
}
