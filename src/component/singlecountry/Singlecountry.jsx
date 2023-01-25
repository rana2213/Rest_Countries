import React, { useState, useEffect } from 'react'
import {  useParams,Link } from 'react-router-dom';
import axios from 'axios';
import '../singlecountry/SingleCountry.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
    const Singlecountry=({darkmode,setDarkmode}) => {
    let {name} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        async function fatchsinglecountrydata() {
            const {data} = await axios(`https://restcountries.com/v2/name/${name}?fullText=true`)
            setUser(data);
        }
        fatchsinglecountrydata();
        
    }, []);

    console.log(user);
return (
    <div className={`${darkmode? "changesingle":""} singlecountry`}>
        <div className='Flag'>
            <Link to={'/'} style={{textDecoration:"none"}}>
            <button  className={`${darkmode? 'changebutton':''} button1`}> <KeyboardBackspaceIcon/>  Back</button>
            </Link>
            <img id='image1' src={user[0]?.flags.svg}  />
        </div>
        <div className='details'>
             <div className='details_1'>
                  <h1>{user[0]?.name}</h1>
             </div>
             <div className='details_2'>
                 <div className='subdetails1'>
                    <p><b>Native Name:</b> {user[0]?.nativeName}</p> 
                   <p><b>Population:</b> {user[0]?.population}</p> 
                   <p><b>Region:</b> {user[0]?.region}</p> 
                   <p><b>Sub Region:</b> {user[0]?.subregion}</p> 
                 </div>  
                 <div className='subdetails_2'>
                    <p><b>Top Level Domain:</b> {user[0]?.topLevelDomain}</p> 
                    <p><b>Currencies:</b> {user[0]?.currencies[0].name }</p> 
                    <p><b>Languages:</b> {user[0]?.languages[0].name }</p> 
                 </div>
           </div>
           <div className='details_3'>
           <p id="p1"><b>Border Countries:</b> {(user.length && Object.keys(user[0]).includes("borders" ) )? user[0]?.borders.map ((border)=>{return <span><h4>{border}</h4></span>}): "noborder"}</p>
            

           </div>

     </div>
     
    </div>
)
}

export default Singlecountry