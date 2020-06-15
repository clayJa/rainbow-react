import Pager from './pager';
import React, {useState} from 'react';


const PagerExample: React.FunctionComponent = () => {
  const [ current, setCurrent ] = useState(1);
  const handlePageChange = (page : number) => {
    setCurrent(page);
  }
  return (
    <Pager current={current} total={5} onPageChange={handlePageChange} />
  );
};
export default PagerExample;
