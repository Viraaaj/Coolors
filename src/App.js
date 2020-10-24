import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';


function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#ff0055').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try{
      
    let colors = new Values(color).all(10);
    setList(colors)

    } catch(error) {
      setError(true);
      console.log(error);
    }
  }


  return (
    <>
    <section className="container">
      <h1> <a href="https://github.com/Viraaaj/Coolors" target="_blank"> COOLORS </a> </h1>
        

      <form onSubmit={handleSubmit}>
        <input type="text" value={color} placeholder="#ffffff"   onChange= {(e) => setColor(e.target.value)} className={`${error?'error' : null}`} />
        <button className="btn" type="submit" >Submit</button>
      </form>
    </section>

    <section className="colors">
      {list.map((color, index) => {
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex} /> })}  
    </section>
    </>
  );
}

export default App;
