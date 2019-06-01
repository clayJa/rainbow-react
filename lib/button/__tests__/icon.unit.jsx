import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Button from '../button';
import {mount} from 'enzyme';

describe('icon', () => {
    it('render successfully', () => {
        const json = renderer.create(<Button name="wechat"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick',() => {
        const fn = jest.fn()
        const component = mount(<Button name="wechat" onClick={fn}/>)
        component.find('svg').simulate('click');
        expect(fn).toBeCalled()
    })
});
