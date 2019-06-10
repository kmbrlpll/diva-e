import React from 'react'; 
import WindowMap from '../components/WindowMap.js'

import renderer from 'react-test-renderer';
jest.useFakeTimers(); 

test('renders correctly' , () => {
	const tree  = renderer.create(<WindowMap />).toJSON();
	expect(tree).toMatchSnapshot();
});