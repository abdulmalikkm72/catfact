import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

function Fact() {
    //1
    const baseUrl='https://catfact.ninja/fact';
    //2
    const [facts,setFacts]=useState({})
    //3
    const fetchData=async()=>{
        const response= await fetch(baseUrl)
        console.log(response);
        const res=await response.json()
        console.log(res);
        setFacts(res);
        
    }
    //4
    useEffect(()=>{
        fetchData()
    },[])
    const factchange=()=>{
      
    }

  return (
    <div>
      <div className="row">
        <h1>{facts.fact}</h1>
       
       <Button variant="success" onClick={factchange()}>New Fact</Button>
      </div>
    </div>
  )
}

export default Fact
