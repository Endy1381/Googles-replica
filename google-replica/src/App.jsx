
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <>
      <div className='header container-fluid'>
        <div className="row">
          <ul>
            <li>Gmail</li>
            <li>Images</li>
            <li className='ih1'><i className="bi bi-list"></i></li>
            <li className='ih2'><i class="bi bi-person-circle"></i></li>

          </ul>
        </div>
      </div>

      <div className="logo">
        <h1>Google</h1>
      </div>
      <div className="search container">
        <div className="row">
          <input type="text" id="search" className='my-5' placeholder='search here' />
        </div>
      </div>
    </>
  )
}

export default App
