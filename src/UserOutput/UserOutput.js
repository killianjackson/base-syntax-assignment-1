import React from 'react';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
        <p>My username is {props.username}</p>
        <p>This is a placeholder paragraph that can say anything I want it to!!!</p>
    </div>
  );
}

export default userOutput;