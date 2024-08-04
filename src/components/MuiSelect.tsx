import { Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([])
  console.log({ countries })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }
  return ( 
    <Box width='250px'>
      <TextField label='Select country' select value={countries} onChange={handleChange} fullWidth SelectProps={{ multiple: true }} size='small' color='secondary' helperText='Please select your country'>
        <MenuItem value='Ин'>Индия</MenuItem>
        <MenuItem value='Ки'>Китай</MenuItem>
        <MenuItem value='Ро'>Россия</MenuItem>
        <MenuItem value='Бр'>Бразилия</MenuItem>
      </TextField>
    </Box>
  )
}
