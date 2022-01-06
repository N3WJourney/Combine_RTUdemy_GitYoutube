import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from "react-redux";
import { store } from "./state";
import RespositoriesList from "./components/RepositioriesList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
            <h1>Search for a package!</h1>
            <RespositoriesList />
        </div>
      </Provider>
    </div>
  );
  
}

export default App;
