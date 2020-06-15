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
      total: 1,
      onPageChange,
    }
    const component = mount(<Pager {...props} />)
    component.find('.rainbow-pager-page-prev').hostNodes().simulate('click')
    expect(onPageChange).not.toBeCalled()
    clearDom()
  })
  it('disable next button', () => {
    const onPageChange = jest.fn()
    const props = {
      current: 1,
      total: 1,
      onPageChange,
    }
    const component = mount(<Pager {...props} />)
    component.find('.rainbow-pager-page-next').hostNodes().simulate('click')
    expect(onPageChange).not.toBeCalled()
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
})
