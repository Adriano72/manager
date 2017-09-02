  import React, { Component } from 'react';
  import { Provider } from 'react-redux';
  import { createStore, applyMiddleware } from 'redux';
  import firebase from 'firebase';
  import ReduxThunk from 'redux-thunk';
  import reducers from './src/reducers';
  import Router from './src/Router';

  class App extends Component {
    componentWillMount() {
      const config = {
        apiKey: 'AIzaSyDYA7D0sENAeVS2BQwoOZIU9PPzV9yR5no',
        authDomain: 'manager-83018.firebaseapp.com',
        databaseURL: 'https://manager-83018.firebaseio.com',
        projectId: 'manager-83018',
        storageBucket: 'manager-83018.appspot.com',
        messagingSenderId: '437834986291'
      };
      firebase.initializeApp(config);
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
