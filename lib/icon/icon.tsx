import React from 'react';
import './importIcons';
import  './icon.scss';
import  classes  from '../helpers/helper';
interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({name,className,...restProps}) => {
    return (
        <svg className={classes('mous-icon',className)} {...restProps}><use xlinkHref={`#${name}`}/></svg>
    );
}

export default Icon;
