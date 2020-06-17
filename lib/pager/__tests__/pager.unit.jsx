import * as React from 'react'
import Pager from '../pager'
import {mount} from 'enzyme'

describe('pager', () => {
  const clearDom = () => {
    document.body.innerHTML = ''
  }
  it('render successfully', () => {
    const onPageChange = jest.fn()
    const props = {
      current: 1,
      total: 1,
      onPageChange,
    }
    const component = mount(<Pager {...props}/>)
    expect(component.find('.rainbow-pager')).toHaveLength(1)
    clearDom()
  })
  it('disable prev button', () => {
    const onPageChange = jest.fn()
    const props = {
      current: 1,
      total: 2,
      onPageChange,
    }
    const component = mount(<Pager {...props} />)
    component.find('.rainbow-pager-page-prev').hostNodes().simulate('click')
    expect(onPageChange).not.toBeCalled()
    component.find('.rainbow-pager-page-next').hostNodes().simulate('click')
    expect(onPageChange).toBeCalled()
    clearDom()
  })
  it('disable next button', () => {
    const onPageChange = jest.fn()
    const props = {
      current: 2,
      total: 2,
      onPageChange,
    }
    const component = mount(<Pager {...props} />)
    component.find('.rainbow-pager-page-next').hostNodes().simulate('click')
    expect(onPageChange).not.toBeCalled()
    component.find('.rainbow-pager-page-prev').hostNodes().simulate('click')
    expect(onPageChange).toBeCalled()
    clearDom()
  })
  it('current props', () => {
    const onPageChange = jest.fn()
    const props = {
      current: 1,
      total: 1,
      onPageChange,
    }
    const component = mount(<Pager {...props} />)
    expect(component.find('.rainbow-pager-current-page')).toHaveLength(1)
    clearDom()
  })
  it('onPageChange event trigger by click item', () => {
    const onPageChange = jest.fn()
    const props = {
      current: 2,
      total: 5,
      onPageChange,
    }
    const component = mount(<Pager {...props} />)
    component.find('span.rainbow-pager-page-item').at(3).simulate('click')
    expect(onPageChange).toBeCalled()
    clearDom()
  })
  it('page  ellipsis', () => {
    const onPageChange = jest.fn()
    const props = {
      current: 5,
      total: 10,
      onPageChange,
    }
    const component = mount(<Pager {...props} />)
    expect(component.find('span.rainbow-pager-ellipsis')).toHaveLength(2)
    clearDom()
  })
  it('hideIfOnePage props', () => {
    const onPageChange = jest.fn()
    const props = {
      current: 1,
      total: 1,
      onPageChange,
      hideIfOnePage: true,
    }
    const component = mount(<Pager {...props} />)
    expect(component.find('.rainbow-pager').hasClass('hide')).toEqual(true)
    clearDom()
  })
})
