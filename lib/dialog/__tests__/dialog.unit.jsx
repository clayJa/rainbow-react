import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Dialog, {confirm, alert, modal} from '../dialog'
import {mount} from 'enzyme'

describe('dialog', () => {
  const clearDom = () => {
    document.body.innerHTML = ''
  }
  it('render successfully', () => {
    const onClose = jest.fn()
    const props = {
      visible: true,
      onClose,
    }
    const component = mount(<Dialog {...props}>这是一个对话框</Dialog>)
    expect(component.find('.rainbow-dialog')).toHaveLength(1)
    expect(component.find('.rainbow-dialog-mask')).toHaveLength(1)
    clearDom()
  })
  it('onClose', () => {
    const onClose = jest.fn()
    const props = {
      visible: true,
      onClose,
    }
    const component = mount(<Dialog {...props}>这是一个对话框</Dialog>)
    component.find('.rainbow-dialog-close').simulate('click')
    expect(onClose).toBeCalled()
    clearDom()
  })
  it('closeOnClickMask', () => {
    const onClose = jest.fn()
    const props = {
      visible: true,
      onClose,
      closeOnClickMask: true,
    }
    const component = mount(<Dialog {...props}>这是一个对话框</Dialog>)
    component.find('.rainbow-dialog-mask').simulate('click')
    expect(onClose).toBeCalled()
    clearDom()
  })
  it('buttons', () => {
    const onClose = jest.fn()
    const props = {
      visible: true,
      onClose,
      buttons: [<button>确定</button>],
    }
    const component = mount(<Dialog {...props}>这是一个对话框</Dialog>)
    expect(component.find('button')).toHaveLength(1)
    clearDom()
  })
  it('modal', () => {
    const afterClose = jest.fn()
    modal(<h1>你好</h1>,[<button>按钮</button>],afterClose)
    expect(document.body.querySelectorAll('h1')).toHaveLength(1)
    document.body.querySelectorAll('.rainbow-dialog-close')[0].click()
    clearDom()
  })
  it('confirm ok', () => {
    const ok = jest.fn()
    const cancel = jest.fn()
    confirm('1', ok, cancel,'ok')
    document.body.querySelectorAll('button.rainbow-button-primary')[0].click()
    expect(ok).toBeCalled()
    clearDom()
  })
  it('confirm cancel', () => {
    const ok = jest.fn()
    const cancel = jest.fn()
    confirm('1', ok, cancel)
    document.body.querySelectorAll('button.rainbow-button-normal')[0].click()
    expect(cancel).toBeCalled()
    clearDom()
  })
  it('alert', () => {
    alert('1')
    const html = document.body.querySelectorAll('.rainbow-dialog-main')[0].innerHTML
    expect(html).toEqual('1')
    clearDom()
  })
})
