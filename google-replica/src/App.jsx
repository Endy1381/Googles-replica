
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <>
      <div className='header container-fluid'>
        <div className="row">
          <ul>
            <li>Co mail</li>
            <li>Images</li>
            <li className='ih1'><i className="bi bi-list"></i></li>
            <li className='ih2'><i className="bi bi-person-circle"></i></li>

          </ul>
        </div>
      </div>

      <div className="logo">
        <h1>Cooleal</h1>
      </div>
      <div className="search container-fluid">
        <div className="row">
          <div className="col-9 i1">
            <input type="text" id="search" className=' form-control text-white' placeholder='search here'/>
          </div>
          <div className="col-3 i2">
            <button className='btn btn-outline-light btn-dark' ><i className="bi bi-search"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
