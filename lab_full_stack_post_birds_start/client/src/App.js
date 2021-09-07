import { useState, useEffect } from "react";
import PageContainer from './containers/PageContainer'

import './App.css';

import { getSightings } from "./SightingService";

function App() {

  
  return (
    <>
      <PageContainer getSightings = {getSightings} />
    </>
  );
}

export default App;
