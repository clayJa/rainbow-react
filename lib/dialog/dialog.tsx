import React, {Fragment, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import {Icon} from '../index';
import './dialog.scss';
import {scopedClassMaker} from '../helpers/helper';
import Button from '../button/button';

interface DialogProps extends React.HTMLAttributes<HTMLElement> {
  visible: boolean,
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('rainbow-dialog');
const Dialog: React.FunctionComponent<DialogProps> = ({visible, children, onClose, buttons, closeOnClickMask}) => {
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
        <div className={scopedClass('main')}>
          {children}
        </div>
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
  closeOnClickMask: false
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component =
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}>
      {content}
    </Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};
const alert = (content: string) => {
  const button = <Button onClick={() => close()} mode="primary" autoFocus>确定</Button>;
  const close = modal(content, [button]);
};
const confirm = (content: string, ok?: () => void, cancel?: () => void, autoFocusButton?: string) => {
  const onOk = () => {
    close();
    ok && ok();
  };
  const onCancel = () => {
    close();
    cancel && cancel();
  };
  const buttons = [
    <Button onClick={onCancel} style={{marginRight: '8px'}} autoFocus={autoFocusButton === 'cancel'}>取消</Button>,
    <Button onClick={onOk} mode="primary"
            autoFocus={autoFocusButton === undefined || autoFocusButton === 'ok'}>确定</Button>
  ];
  const close = modal(content, buttons, cancel);
};
export {alert, confirm, modal};
export default Dialog;
