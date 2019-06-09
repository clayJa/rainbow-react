import React, {useState} from 'react';
import Dialog from './dialog';
import Button from '../button/button';

const DialogExample: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>toggle dialog</Button>
      <Dialog visible={visible} onClose={() => setVisible(false)} >
        hhhhhhafa
      </Dialog>
    </div>
  );
};
export default DialogExample;
