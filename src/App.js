// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [color,usecolor]=useState("olive");
  return (
      <div className="w-full h-screen flex flex-wrap justify-center"
      style={{backgroundColor:color}}>
        <h1 className='text-align-center text-3xl text-yellow-800'>Background Changer</h1>
        <button className='fixed top-20 p-4 rounded-xl border border-orange-700' style={{backgroundColor:"olive"}} onClick={()=>usecolor("olive")}>
          Default Color: Olive
        </button>
        <div className='fixed bottom-20 left-1 right-1'>
        <div className="flex flex-wrap justify-around shadow-lg bg-black rounded-xl shadow-xl">
        <button
        className="border border-white rounded-xl px-4 py-1 text-white" style={{backgroundColor:"red"}} onClick={()=>usecolor("red")}>Red</button> 
        <button
        className="border border-white rounded-xl px-4 py-1 text-white" style={{backgroundColor:"green"}} onClick={()=>usecolor("green")}>Green</button> 
        <button
        className="border border-white rounded-xl px-4 py-1 text-white" style={{backgroundColor:"blue"}} onClick={()=>usecolor("blue")}>Blue</button> 
        <button
        className="border border-white rounded-xl px-4 py-1 text-white" style={{backgroundColor:"orange"}} onClick={()=>usecolor("orange")}>Orange</button> 
        <button
        className="border border-white rounded-xl px-4 py-1 text-black" style={{backgroundColor:"aliceblue"}} onClick={()=>usecolor("aliceblue")}>Aliceblue</button> 
        <button
        className="border border-white rounded-xl px-4 py-1 text-black" style={{backgroundColor:"cyan"}} onClick={()=>usecolor("cyan")}>Cyan</button> 
        <button
        className="border border-white rounded-xl px-4 py-1 text-white" style={{backgroundColor:"gray"}} onClick={()=>usecolor("gray")}>Gray</button> 
        <button
        className="border border-white rounded-xl px-4 py-1 text-white" style={{backgroundColor:"black"}} onClick={()=>usecolor("black")}>Black</button> 
        <button
        className="border border-white rounded-xl px-4 py-1 text-black" style={{backgroundColor:"pink"}} onClick={()=>usecolor("pink")}>Pink</button> 
        </div>
        </div>
      </div>
  );
}

export default App;
