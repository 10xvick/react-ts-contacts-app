import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Contacts from './redux/components/Contacts';
import { contacts } from './redux/reducers/contacts';
import './style.css';

const store = createStore(contacts);

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Contacts />
      </Provider>
    </div>
  );
}
