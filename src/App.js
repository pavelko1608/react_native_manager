import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD91sjHUehrh16Pb8eFcrX7sEXhu9H3dMc',
      authDomain: 'manager-db022.firebaseapp.com',
      databaseURL: 'https://manager-db022.firebaseio.com',
      projectId: 'manager-db022',
      storageBucket: 'manager-db022.appspot.com',
      messagingSenderId: '335955747186'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
