import React, { useState } from "react";
import CommonHeader from "./CommonHeader";
import Title from "./Title";
import Footer from "./Footer";
import classes from "./ContactUs.module.css"

const ContactUs=()=>{

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState("")

    async function  handleSubmitButton(e){
        e.preventDefault();
        const obj={
            name:name,
            email:email,
            phno:number,
        }
        const response = await fetch('https://movies-2b420-default-rtdb.firebaseio.com/query.json/',{
          method:'POST',
          body : JSON.stringify(obj),
          headers:{
            'Content-Type': 'application/json'
          }
      });
      const data=await response.json();
      console.log(data.name)
      }


    return <React.Fragment>
        <CommonHeader />
        <Title/>
        <section>
        <form className={classes.form} onSubmit={handleSubmitButton}>
                <div className={classes.box}>
            <label htmlFor="name">Name</label>
            <input value={name} type="text" id="name" onChange={(e)=>{setName(e.target.value)}}/></div>
            <div className={classes.box}>
            <label htmlFor="email">Email Id</label>
            <input value={email} type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/></div>
            <div className={classes.box}>
            <label htmlFor="phno">Phone Number</label>
            <input value={number} type="number" id="phno" onChange={(e)=>{setNumber(e.target.value)}}/></div>
            <button type="submit">Submit</button>
            
        </form>
        </section>
        <Footer/>
    </React.Fragment>
}

export default ContactUs;