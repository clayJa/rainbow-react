import React from 'react';
import Button from './button';


const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button loading={true} onClick={()=>{console.log('hhh')}}>按钮</Button>
      <Button mode="danger">按钮</Button>
      <Button mode="primary">按钮</Button>
    </div>
  );
};

export default ButtonExample;
