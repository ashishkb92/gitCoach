import React from 'react';
import {firebaseApp} from '../Firebase';
import '../App.css';

class App extends React.Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="App">
        App
        <button className = "btn btn-danger" type ="button" onClick = {()=>this.signOut()}> Sign Out</button>
      </div>
    );
  }
}

export default App;
