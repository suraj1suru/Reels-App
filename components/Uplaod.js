import React from "react";
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Uplaod() {
  return (
    <div className="upload-btn">
      <Button variant="outlined" color="secondary" component="label" size="large">
        <MovieIcon/>Upload Video
        <input hidden accept="*" multiple type="file" />
      </Button>
      <LinearProgress variant="determinate"  color="secondary" value={10} sx={{mt:'0.5rem', mb:'0.5rem'}}/>
    </div>
  );
}

export default Uplaod;
