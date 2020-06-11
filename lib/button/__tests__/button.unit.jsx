import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Button from '../button';
import {mount} from 'enzyme';

describe('button', () => {
    it('render successfully', () => {
        const json = renderer.create(<Button />).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick',() => {
        const fn = jest.fn()
        const component = mount(<Button onClick={fn}/>)
        component.find('button').simulate('click');
        expect(fn).toBeCalled()
    })
    it('props mode',() => {
        const component = mount(<Button mode={`danger`}/>)
        expect(component.find('button').hasClass('rainbow-button-danger')).toEqual(true)
    })
    it('props loading',() => {
        const component = mount(<Button loading={`danger`}/>)
        expect(component.find('button').children().find('svg').hasClass('loading')).toEqual(true)
    })
});
