import React from 'react';
import Icon from '../icon/icon';
import './spin.scss';
import {scopedClassMaker} from '../helpers/helper';

const sc = scopedClassMaker('rainbow-spin');


interface SpinProps extends React.HTMLAttributes<HTMLElement> {
  spinning?: boolean;
  tip?: string;
  size?: string,
}



const Spin: React.FunctionComponent<SpinProps> = ({ spinning,tip,size = 'default', ...restProps}) => {
  return (
    <div className={sc({'': true, [size]: true  })}>
      <Icon name={ 'loading'} className={'loading'}/>
      { tip ? <span className={sc('text')}> {tip} </span> : ''}
    </div>
  );
};
export default Spin;
