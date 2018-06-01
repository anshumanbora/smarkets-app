import React from 'react';
import {shallow} from 'enzyme';
import EventView from './EventView';


describe('<EventView/>',()=>{
    it('renders EventView', () => {
        const details = shallow(<EventView/>);
        // console.log('length', details.find('div').length);
        expect(details.find('div').length).toBe(7);

    });
});
