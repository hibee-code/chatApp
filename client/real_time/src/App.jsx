import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <div>
          <h2 className='join'>Join</h2>
          <hr/>
        </div>
        <div className='inp_container'>
          <div>
            <input className='input inp1' type="text" placeholder='JS MASTERY' name='inp1'/>
          </div>
          <div>
            <input className='input inp2' type="text" placeholder="Course" name='inp2' />
          </div>
          <div>
            <button type='submit' className='input inp3' name='sigin'>Sign In</button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App