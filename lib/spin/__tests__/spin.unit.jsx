import * as React from 'react'
import Spin from '../spin'
import {mount} from 'enzyme'

describe('spin', () => {
  const clearDom = () => {
    document.body.innerHTML = ''
  }
  it('render successfully', () => {
    const component = mount(<Spin />)
    expect(component.find('.rainbow-spin')).toHaveLength(1)
    clearDom()
  })
  it('spin tip prop', () => {
    const props = {
      tip: 'Loading...'
    }
    const component = mount(<Spin {...props}/>)
    expect(component.find('.rainbow-spin-text')).toHaveLength(1)
    clearDom()
  })
  it('spin  size props', () => {
    const props = {
      size: 'large'
    }
    const component = mount(<Spin {...props}/>)
    expect(component.find('.rainbow-spin-large')).toHaveLength(1)
    clearDom()
  })
})
