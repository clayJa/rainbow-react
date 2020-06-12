import Pager from './pager';
import React, {useState} from 'react';


const PagerExample: React.FunctionComponent = () => {
  const [ current, setCurrent ] = useState(1);
  const handlePageChange: React.EventHandler<any> = (page : number) => {
    console.log('page:',page);
    setCurrent(page);
  }
  return (
    <Pager current={current} total={8} onPageChange={handlePageChange} />
  );
};
export default PagerExample;
