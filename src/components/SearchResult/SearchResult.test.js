import React from 'react';
import ReactDOM from 'react-dom';
import SearchResult from './SearchResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResult onRef={ref => null}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});