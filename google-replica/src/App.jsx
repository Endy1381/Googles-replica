import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <>
      <div className='header container-fluid'>
        <div className="row">
          <ul>
            <li>Gmail</li>
            <li>Images</li>
            <li><i className="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
