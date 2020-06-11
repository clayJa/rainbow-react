import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/helper';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({name, className, ...restProps}) => {
    return (
        <svg className={classes('rainbow-icon', className)} {...restProps}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

export default Icon;
