import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Countrycard from '../../component/Countrycard';
import '../Home/Home.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Pagination } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
let all_country;


const Home = ({ darkmode, setDarkmode }) => {
  const [region, SetRegion] = useState(" ");
  const [countrydata, setCountrydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    async function fatchdata() {
      const { data } = await axios(" https://restcountries.com/v2/all ");
      setCountrydata(data);
      all_country = data;
    }

    fatchdata();
  }, [])
  const pageing = (arr, currentPage, pageSize) => {
    let startIndex = currentPage * pageSize;
    let endIndex = startIndex + pageSize;
    return arr.slice(startIndex, endIndex);
  }
  // console.log(countrydata);
  const changepage = (e, value) => {
    setCurrentPage(value);
  }
  console.log(currentPage);

  const searching = (arr, searchby, keyword) => {
    return arr.filter((item) => item[searchby].toLowerCase().startsWith(keyword.toLowerCase()))
  };

  const handleSearch = (e) => {
    setCurrentPage(1);
    let keyword = e.target.value;
    let searchby = "name";
    let result = countrydata && searching(all_country, searchby, keyword);
    setCountrydata(result);
  }
  console.log(countrydata);
  const filtering = (arr, filterby) => {
    return arr?.filter((item) => filterby.length ? item["region"] === filterby : item)
  }
  const handlefilter = (e) => {
    setCurrentPage(1);
    SetRegion(e.target.value)
    let keyword = e.target.value;
    let results = countrydata && filtering(all_country, keyword);
    setCountrydata(results);
  }

  const pageResult = (countrydata && pageing(countrydata, currentPage - 1, pageSize));

  return (
    <div className={`${darkmode ? "homepagechange" : ""} homepage`}>
      <div className='search_sort'>
        <SearchRoundedIcon  className='icon' />
        <input type="search" placeholder=' search for a country' className={`${darkmode ? "inputchange" : ""} input`} onChange={handleSearch} />
        <FormControl className='formcontrol' >
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Region"
            onChange={handlefilter}
          >
            <MenuItem value={''}>All</MenuItem>
            <MenuItem value={'Asia'}>Asia</MenuItem>
            <MenuItem value={'Africa'}>Africa</MenuItem>
            <MenuItem value={'Americas'}>America</MenuItem>
            <MenuItem value={'Europe'}>Europe</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='cardData'>
        {pageResult && pageResult?.map((item) => (<Countrycard person={item} />))}
      </div>
      <Pagination count={countrydata ? Math.ceil(countrydata.length / pageSize) : 0} color="primary" page={currentPage}  className="pageination" onChange={changepage} />

    </div>
  )
}

export default Home;