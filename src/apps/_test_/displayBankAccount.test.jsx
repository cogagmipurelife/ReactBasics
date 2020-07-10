import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import displayBankAccount from '../core-logic/displayBankAccount';
Enzyme.configure({adapter: new Adapter()});

describe ('displayBankAccount' , () =>
{
    it('should render correctly', () =>
    {
        const component = shallow(<displayBankAccount/>);
        expect(component).toMatchSnapshot();
    });
    
});
