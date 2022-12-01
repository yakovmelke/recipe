import { motion } from "framer-motion";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Search() {
  const [input,setInput]=useState("")
  const navigate = useNavigate()
  const sudmitHandler=(e)=>{
    e.preventDefault()
    navigate(`/searched/${input}`)
  }
  
    return (
    <FormStyle onSubmit={sudmitHandler}>
       <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <FaSearch></FaSearch>
        <input onChange={(e)=>{
            setInput(e.target.value)
        }} type="text" value={input}/>
      </motion.div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
margin:0rem 20rem;
div{

    position: relative;
    width: 100%;
}
input{
    border:none;
    width:100%;
    background:linear-gradient(35deg,#494949,#313131);
    font-size:1.5rem;
    color:white;
    padding: 1rem 3rem;
    border-radius:1rem;
    outline:none;
}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform: translate(100%,-50%);
    color:white
}

`;
