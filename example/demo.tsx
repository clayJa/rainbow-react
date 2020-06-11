import * as React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";
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
    <Highlight {...defaultProps} code={code} theme={theme} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style,background: 'transparent',padding: '16px',}}>
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
      </div>
      <div className={codeVisible ? 'code-show demo-code' : 'demo-code'}>
        <span className={'code-title'}>代码示例</span>
        <Icon name={codeVisible ? 'code' : 'code-hide'} onClick={() => setCodeVisible(!codeVisible)}/>
      </div>
      <div>
        {codeVisible && source}
      </div>
    </div>
  );
};

export default Demo;
