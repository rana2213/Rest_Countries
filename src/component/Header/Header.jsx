import React from 'react'
import "../Header/Header.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = ({darkmode,setDarkmode}) => {
  const changemode=()=>{
    setDarkmode(!darkmode);
  }
  return (
    <header className={`${darkmode? "changeheader":""} header`}>
        <h2>Where in the World ?</h2>
        <button className={`${darkmode? "mode":"" } button`} onClick={changemode}><DarkModeIcon/>Dark Mode</button>
    </header>
  )
}

export default Header;