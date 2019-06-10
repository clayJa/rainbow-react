import React, {useState} from 'react';
import Dialog, {confirm, alert, modal} from './dialog';
import Button from '../button/button';

const DialogExample: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    const close = modal(<h1>你好
      <button onClick={() => close()}>close</button>
    </h1>);
  };
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>toggle dialog</Button>
      <Dialog visible={visible} onClose={() => setVisible(false)}>
        hhhhhhafa
      </Dialog>
      <Button onClick={() => alert('1')}>alert</Button>
      <Button onClick={() => confirm('1', () => {
        console.log('你点击了yes');
      }, () => {
        console.log('你点击了no');
      })}>confirm
      </Button>
      <Button onClick={openModal}>modal</Button>
    </div>
  );
};
export default DialogExample;
