import React from 'react';
import {shallow} from 'enzyme';
import Event from './Event';

const defaultProps = {
    event:"Kameng",
    link:'Gogo'
};
describe('<Event/>',()=>{
    it('renders Events', () => {
        const details = shallow(<Event event={defaultProps.event} link={defaultProps.link}/>);
        // console.log('length', details.find('.event-link').length);
        expect(details.find('.event-link').length).toBe(1);

    });
});
