import * as React from 'react';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

import Card from "./Card";

export default function SimpleSlide() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Card>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        
      </Slide>
    </Card>
  );
}
