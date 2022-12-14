import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import video from './montains.mp4';

function App() {

const [advice, setAdvice] = useState('');


const getAdvice=async () =>{
  const response= await fetch(`https://www.boredapi.com/api/activity`);
  const data = await response.json();
  setAdvice(data.activity);
}

useEffect(() =>{
  getAdvice();
}, [])



  return (
    <div className="App">
       
      <video autoPlay muted loop >
        <source src={video} type='video/mp4'/>
      </video>

<div className='block'>
<p>{advice}</p>
<button onClick={getAdvice}>Нажми</button>
</div>

     
    </div>
  );
}

export default App;
