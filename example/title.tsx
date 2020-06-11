import * as React from 'react';
import {ReactElement} from 'react';
import './title.scss'

interface Props extends React.HTMLAttributes<HTMLElement>{
  title: string,
  describe?: string | ReactElement
}
const DemoTitle: React.FunctionComponent<Props> = ({title,describe,children,...resetProps}) => {
  return (
    <div className={'demo-title'} {...resetProps}>
      <div className="title">{title}</div>
      <div className="describe">{describe || children }</div>
    </div>
  )
}

export default DemoTitle;
