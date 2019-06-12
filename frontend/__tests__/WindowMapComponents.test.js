import React from 'react';
import WindowIndicator from '../components/WindowIndicator.js';
import ThermometherIndicator from '../components/ThermometherIndicator.js';

import renderer from 'react-test-renderer';
jest.useFakeTimers(); 

const imageDimensions = { x : 665 , y : 828 };

test('Window indicator renders correctly' , () => {
	const windowMock = {
    id: '1',
    x: 64 , 
    y: 799, 
    isOpen: true,
  };
	const tree  = renderer.create(<WindowIndicator 
		windowData={windowMock} 
		imageDimensions = {imageDimensions} />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('Thermomether indicator renders correctly' , () => {
	const thermometerMock =   {
    id: 1, 
    x: 85,
    y: 734,
    value: '26', 
  };
	const tree  = renderer.create(<ThermometherIndicator 
		thermometerData = {thermometerMock}
		imageDimensions = {imageDimensions}  />).toJSON();
	expect(tree).toMatchSnapshot();
});