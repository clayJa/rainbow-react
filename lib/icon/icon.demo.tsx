import React, {Fragment} from 'react';
import Demo from '../../example/demo';
import DemoTitle from '../../example/title'
import IconExample from './icon.example';

const IconDemo = () => {
  return (
    <Fragment>
      <DemoTitle title={'Icon 图标'} describe={'语义化的矢量图形。'} />
      <DemoTitle title={'基础用法'} />
      <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
        <IconExample/>
      </Demo>
      <DemoTitle title={'Attributes'} />
    </Fragment>
  );
};

export default IconDemo;
