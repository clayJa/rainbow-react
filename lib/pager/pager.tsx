import React, {useEffect, useState} from 'react';
import Icon from '../icon/icon';
import './pager.scss';

interface PagerProps extends React.HTMLAttributes<HTMLElement> {
  total: number;
  current: number;
  onPageChange: React.EventHandler<any>,
  hideIfOnePage?: boolean;
}

// filter repeat element
const unique = (array: Array<any>) : Array<string>=> {
  const obj: { [key:string]: any} = {};
  array.forEach(item => {
    obj[item] = item;
  });
  return Object.keys(obj);
}

// compute page render array

const computePageData = (originPages : Array<number>,totalPage: number) => {
  const computedPages = totalPage > 7  ? unique(originPages)
      .map(page => { return parseInt(page,10)})
      .sort((a,b)=> a - b)
      .reduce((pre,cur,index,array): Array<any> => {
        pre.push(cur);
        array[index + 1] && array[index + 1] - cur > 1 && pre.push('•••');
        return pre;
      },Array()) :
    Array.from(new Array<any>(totalPage).keys()).map((number,index) => index + 1) ;
  return computedPages;
}

const Pager: React.FunctionComponent<PagerProps> = ({total, current,onPageChange,hideIfOnePage, ...restProps}) => {
  const [pages,setPages] = useState(Array());
  useEffect(()=>{
    const originPages = [1,total,current - 2,current - 1, current, current + 1, current + 2]
      .filter(num => num > 0 && num <= total);
    const computedPages = computePageData(originPages,total) ;
    setPages(computedPages);
  },[current,total])
  return (
    <div className={'rainbow-pager'}>
      <Icon name={ 'left'} className={`${current === 1 ? 'disabled' : ''} rainbow-pager-page-item`}
            onClick={() => current !== 1 && onPageChange(current - 1)}
      />
      {
        pages.map((page,index) => {
         return page === current ?
           <span className={'rainbow-pager-current-page rainbow-pager-page-item'} key={page}>{page}</span> :
           page === '•••' ?
             <span className={'rainbow-pager-ellipsis'} key={`ellipsis-${index}`}>{page}</span> :
             <span className={'rainbow-pager-page-item'} key={page} onClick={() => onPageChange(page)}>{page}</span>
        })
      }
      <Icon name={ 'right'} className={`${current === total ? 'disabled' : ''} rainbow-pager-page-item`}
            onClick={() => current !== total && onPageChange(current + 1)}
      />
    </div>
  );
};
Pager.defaultProps = {
  hideIfOnePage: true,
};
export default Pager;
