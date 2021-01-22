import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import MainScreen from './screen/MainScreen';

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
