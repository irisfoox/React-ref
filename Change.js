import React ,{Component,useState} from 'react';

export default function Change(){
const [div1,setDiv1]=useState('');
const [div2,setDiv2]=useState('');
const [div3,setDiv3]=useState('');
const [word,setWord]=useState('');   //because only div is too boring
const refToAll=React.createRef();

function handleClick(){
  refToAll.current.disabled=true;
 }
 const setWord1=(val)=>{
   setWord(val);
 }
return(
      <>
       <div onClick={handleClick} >Hello how are you?</div>
       <div ref={refToAll} >what now?</div>
       <div ref={refToAll} >what am I doing so late at night?</div>
       <input type="text" value={word} onChange={(e)=>setWord1(e.target.value)} ref={refToAll} >Go to sleep already</input>
     </>
     )
 };
