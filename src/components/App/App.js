import React, { Component } from 'react';
import '../Header/index'
import Header from "../Header";
import Footer from "../Footer";

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Footer/>
      </div>
    );
  }
}

export default App;
