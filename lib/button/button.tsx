import React from 'react';
import Icon from '../icon/icon'
import './button.scss';
import classes from '../helpers/helper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  mode?: 'primary' | 'danger' | 'normal',
}

const Button: React.FunctionComponent<ButtonProps> = ({loading, mode, className,children, ...restProps}) => {
  return (
    <button className={classes(`mous-button-${mode || 'normal'}`,'mous-button', className)} {...restProps}>
      { loading ?
        <Icon
          name="loading"
          className="loading"
        /> : ''}
      {children}
    </button>
  );
};

export default Button;
