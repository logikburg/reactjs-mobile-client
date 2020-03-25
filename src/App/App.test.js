import React from 'react';
import {App} from './App';
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux';
import { store } from '../_helpers';

it('App renders without crashing', () => {
    const wrapper = mount(<Provider store={store}><App /></Provider>)
});
