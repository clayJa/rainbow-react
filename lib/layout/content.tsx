import React from 'react';
import {scopedClassMaker} from '../helpers/helper';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('mous-layout');
const Content: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('content', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Content;
