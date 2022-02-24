import React, { useState, useContext } from 'react';
import { InputLabel, FormControl, MenuItem, Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Cities } from '@/constants/index';
import { WeatherContext } from '@/contexts/WeatherContext';


const SelectCity = () => {

    let { city, setCity } = useContext(WeatherContext);
  
    const handleChange = (event: SelectChangeEvent<typeof city>) => {
        setCity(event.target.value);
    };

    return<Box sx={{ minWidth: 150 }}>   
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={city}
                        label="City"
                        onChange={handleChange}
                    >
                        {Cities.map((item)=>{
                            return<MenuItem value={item.value} key={item.name}>{item.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
          </Box>
}

export default SelectCity;