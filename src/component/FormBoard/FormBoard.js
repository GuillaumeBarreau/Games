import React, { useState } from 'react';

const FormBoard = ({ isShowing, getValueCol, getValueRow, valuesUpdateStatus }) => {

  const [inputValueRow, setInputValueRow] = useState(6);
  const [inputValueCol, setInputValueCol] = useState(7);

  const stopEventSubmit = (event)  => {
    event.preventDefault();
  };

  const setFormValues = () => {
    valuesUpdateStatus();
    getValueCol(inputValueCol);
    getValueRow(inputValueRow);
  };

  /////////////////////////////////
  ////////STYLED COMPONENTS////////
  /////////////////////////////////

  /////////////////////////////////
  ////////RETURN COMPONENT/////////
  /////////////////////////////////
  
  return isShowing
    ?
      (
        <form onSubmit = { stopEventSubmit } >

          <label>
            Rows :
            <input 
              type = "number"
              name = "row" 
              min = "0"
              value = { inputValueRow }
              onChange = { e => setInputValueRow(e.target.value) }
            />
          </label>
          <br/>
          <label>
            Cols :
            <input 
              type = "number" 
              name = "col" 
              min = "0"
              value = { inputValueCol }
              onChange = { e => setInputValueCol(e.target.value) }
            />
          </label>
          <br/>
          <input 
            type = "submit" 
            onClick= { setFormValues }
            value = "Envoyer" 
          />

        </form>
      )
    :
      null
}

export default FormBoard
