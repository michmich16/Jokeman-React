import { useState } from 'react'
import { useEffect } from 'react'
import './App.scss';
import { Fetch } from './components/Fetch/Fetch';

function App() {

  return (
    <>
    <h1>Jokeman</h1>
      <Fetch />
    </>
  )
}

export default App
