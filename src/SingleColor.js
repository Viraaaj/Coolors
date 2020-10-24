import React, { useEffect, useState } from "react";
import rgbToHex from './utils';
// import { Grid } from '@material-ui/core';

const SingleColor = ({rgb, weight, index, hexColor}) => {

  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(',');

  const hex = rgbToHex(...rgb);

  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [alert])


  return (
      <article 
        onClick={() => {setAlert(true)
        navigator.clipboard.writeText(hexValue)}}
        className={`color ${index > 10 && 'color-light'}`} 
        style={{backgroundColor:`rgb(${bcg})`}}>

        <p className="percent-value">
          {weight}%
        </p>

        <p className="color-value">
          {hexValue}
        </p>

        {alert && <p className="alert">Copied to Clipboard!</p> }

      </article>
    )
};

export default SingleColor;