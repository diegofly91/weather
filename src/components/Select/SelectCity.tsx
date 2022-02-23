import React, { useState } from 'react';
import { InputLabel, FormControl, MenuItem, Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Cities } from '@/constants/index';



const SelectCity = () => {

    const [age, setAge] = useState<string | number>('Bogota');
  
    const handleChange = (event: SelectChangeEvent<typeof age>) => {
      setAge(event.target.value);
    };

    return<Box sx={{ minWidth: 150 }}>   
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Ciudad"
                    onChange={handleChange}
                    >
                        {Cities.map((item)=>{
                            return<MenuItem value={item.name} key={item.name}>{item.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
          </Box>
}

export default SelectCity;