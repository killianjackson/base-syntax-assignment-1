import React from 'react';

const userInput = (props) => {
  const style = {
    font: 'inherit',
    border: '1px solid black',
    padding: '8px',
  };

  return (
    <div className="UserInput">
      <input type="text" style={style} onChange={props.changed} value={props.username}/>
    </div>
  );
}

  export default userInput;