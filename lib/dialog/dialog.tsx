import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {Icon} from '../index';
import './dialog.scss';
import {scopedClassMaker} from '../helpers/helper';

interface DialogProps extends React.HTMLAttributes<HTMLElement> {
  visible: boolean,
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('mous-dialog');
const Dialog: React.FunctionComponent<DialogProps> = ({visible, children, onClose, buttons,closeOnClickMask}) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (closeOnClickMask) {
      onClose(e);
    }
  };
  const renderNode = visible &&
    <Fragment>
      <div className={scopedClass('mask')} onClick={onClickMask}/>
      <div className={scopedClass()}>
        <div className={scopedClass('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <div className={scopedClass('header')}>
          提示
        </div>
        <main className={scopedClass('content')}>
          {children}
        </main>
        {buttons && buttons.length > 0 &&
        <div className={scopedClass('footer')}>
          {buttons && buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </div>
        }
      </div>
    </Fragment>;
  return (
    ReactDOM.createPortal(renderNode, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: true
};

export default Dialog;
