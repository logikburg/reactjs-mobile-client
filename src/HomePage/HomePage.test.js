//import React from 'react';
//import HomePage from './HomePage';
//import ReactDOM from 'react-dom';

//it('HomePage renders without crashing', () => {
//    const container = document.createElement("div");
//    ReactDOM.render(<HomePage/>, container);
//});

import React from 'react';
import {HomePage} from './HomePage';
import { shallow, mount } from 'enzyme'
import { store } from '../_helpers';
import { Provider } from 'react-redux';

it('HomePage renders without crashing', () => {
    var testser = {id:'test'};
    const wrapper = mount(<Provider store={store}><HomePage user={testser} /></Provider>)
});
