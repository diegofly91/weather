import { useContext, ChangeEvent } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { WeatherContext } from '@/contexts/WeatherContext';
import { NumberDays } from '@/constants/numberDays';

const RowRadioDays = () => {

  const { days, setDays } = useContext(WeatherContext);  
 
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setDays(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {
            NumberDays.map((item)=>
                       <FormControlLabel  
                            checked={days == item.value}
                            onChange={handleChange} 
                            value={item.value} 
                            key={`radio${item.value}`}
                            control={<Radio />} 
                            label={item.value} 
                       />
            )
        }
      </RadioGroup>
    </FormControl>
  );
}

export default RowRadioDays;