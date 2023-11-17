import React from 'react'
import './index.css'

const App2 = () => {
  return (
    <div className='App2'>
        <div className='container1'>
            <div className='learn'>
                <li>Learn React</li>
                <p>X</p>
            </div>
            <div className='con_inp'>
                <input className='input inp1' type="text" placeholder='JavaScript mastery, welcome to room learn react.'/><span className='input inp2'>admin</span>
            </div>
            <div className='con_inp2'>
                <input className='input inp3' type="text" placeholder='Type a message...' /><span ><button  className='input inp4'type='submit'>Send</button></span>
            </div> 
            
        </div>
        <div className='container2'>
            <div className='p1'>
                <p>Realtime Chat Application 💬</p><p>Created with react,Express,Node and socket.io ❤️</p><p>Try it oot right now!</p>
            </div>
            <div className='p2'>
                <p>People currentlt chatting:</p><p>javascript mastery</p>
            </div>
        </div>
    </div>
  )
}

export default App2