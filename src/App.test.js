import React from 'react';
import { render } from '@testing-library/react';
import SamuraiJSApp from './App';
import ReactDOM from 'react-dom'
test('renders learn react link', () => {
  const { getByText } = render(<SamuraiJSApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />,div);
  ReactDOM.unmountComponentAtNode(div)
})
