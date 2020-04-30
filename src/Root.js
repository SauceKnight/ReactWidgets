import React from 'react';
import Clock from './Clock';
import Folder from './Tabs'
import Weather from './Weather';
import Auto from './Auto';

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

const Root = () => (
  <div>
    <Clock />
    <Folder folders={folders} />
    <Weather />
    <Auto />
  </div>
);

export default Root;


// 4f6392c5bdaab0e378e9496e525a4cee