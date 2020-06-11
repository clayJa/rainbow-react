import classes, {scopedClassMaker} from '../helper'

describe('classes', () => {
  it('classes 接受一个className', () => {
    const a = classes('test')
    expect(a).toEqual('test')
  })
  it('classes 接受两个className', () => {
    const a = classes('test1', 'test2')
    expect(a).toEqual('test1 test2')
  })
  it('classes 接受 undefined ', () => {
    const a = classes('test1', undefined)
    expect(a).toEqual('test1')
  })
  it('classes 接受各种奇怪参数 ', () => {
    const a = classes('test', undefined, null, false, '中文')
    expect(a).toEqual('test 中文')
  })
  it('classes 不接受参数 ', () => {
    const a = classes()
    expect(a).toEqual('')
  })
})
describe('scopedClassMaker', () => {
  it('scopedClassMaker 接受参数 prefix 返回一个函数 ',() => {
    const fn = scopedClassMaker('rainbow-test');
    expect(fn).toBeInstanceOf(Function)
  })
  it('scopedClassMaker 接受参数 prefix 返回的函数接受无参数 ',() => {
    const fn = scopedClassMaker('rainbow-test');
    expect(fn()).toEqual('rainbow-test')
  })
  it('scopedClassMaker 接受参数 prefix 返回的函数接受一个 string 类型参数 ',() => {
    const fn = scopedClassMaker('rainbow-test');
    expect(fn('text')).toEqual('rainbow-test-text')
  })
  it('scopedClassMaker 接受参数 prefix 返回的函数接受一个 object 类型参数',() => {
    const fn = scopedClassMaker('rainbow-test');
    expect(fn({y: true, z: false})).toEqual('rainbow-test-y')
    expect(fn({y: true, z: true})).toEqual('rainbow-test-y rainbow-test-z')
  })
  it('scopedClassMaker 接受参数 prefix 返回的函数接受一个自定义 Options 类型参数添加额外的 class',() => {
    const fn = scopedClassMaker('rainbow-test');
    expect(fn({y: true, z: true}, {extra: 'red'})).toEqual('rainbow-test-y rainbow-test-z red')
  })
})
