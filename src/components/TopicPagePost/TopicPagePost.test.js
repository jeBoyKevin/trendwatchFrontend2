import React from 'react';
import ReactDOM from 'react-dom';
import TopicPagePost from './TopicPagePost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  let testPost = {};
  let sender = {};

  testPost.id = 1;
  sender.id = 12;
  sender.username = "Peter";
  sender.reputation = 131;
  sender.bio = "Mijn naam is Peter";

  testPost.sender = sender;

  testPost.message = "Wow dit was cool!";
  testPost.date = "2019-10-22T17:17:55.000+0000"
  testPost.updoots = 121;

  ReactDOM.render(<TopicPagePost message={testPost}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});