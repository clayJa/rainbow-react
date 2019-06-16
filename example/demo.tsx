import * as React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import {useState} from 'react';
import {Icon} from '../lib';
import './demo.scss'
import classes from '../lib/helpers/helper';

interface Props extends React.HTMLAttributes<HTMLElement>{
  code: string;
}

const Demo: React.FunctionComponent<Props> = ({code,children,className,...restProps}) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const source = (
    <Highlight {...defaultProps} code={code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
      )}
    </Highlight>
  );
  return (
    <div  {...restProps} className={classes(className,'demo-wrapper')}>
      <div className="example">
        {children}
        <div className="code-icon">
          <Icon name={codeVisible ? 'single-close' : 'code'} onClick={() => setCodeVisible(!codeVisible)}/>
        </div>
      </div>
      <div>
        {codeVisible && source}
      </div>
    </div>
  );
};

export default Demo;
