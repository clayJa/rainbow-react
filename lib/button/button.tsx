import React from 'react';
import Icon from '../icon/icon'
import './button.scss';
import classes from '../helpers/helper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  mode?: 'primary' | 'danger' | 'normal',
  icon?: string
}

const Button: React.FunctionComponent<ButtonProps> = ({icon, loading, mode, className,children, ...restProps}) => {
  return (
    <button className={classes(`mous-button-${mode || 'normal'}`,'mous-button', className)} {...restProps}>
      {icon  || loading ?
        <Icon
          name={loading ? 'loading' : icon ? icon : ''}
          className={`${loading ? 'loading ' : ''}icon`}
        /> : ''}
      {children}
    </button>
  );
};

export default Button;
