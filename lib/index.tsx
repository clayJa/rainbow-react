import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

ReactDOM.render(
    <div>
        <Icon name="wechat" onClick={()=>{console.log('hhh')}} onMouseEnter={() =>{console.log('111')}} className={undefined}/>
        <Icon name="github"/>
        <Icon name="qq"/>
    </div>, document.querySelector('#root'));
