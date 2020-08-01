import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AdmissionForm from "./components/AdmissionForm";
import Navigation from "./components/Navigation";
import Result from "./components/Result";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route exact path="/">
          <Result />
        </Route>
        <Route path="/admission">
          <AdmissionForm />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
