import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {Dashboard, Register, Landing, Error } from './pages'

const Button = styled.button`
background: red;
color: white;
font-size: 1rem;
`

function App(){
    return(
        <BrowserRouter>
        <nav className="flex sm:justify-left space-x-4">
        <Link to='/' className="rounded-lg px-3 py-2 text-purple-700 font-medium hover:bg-purple-100 hover:text-purple-900">Dashboard</Link>
        <Link to='/register' className="rounded-lg px-3 py-2 text-purple-700 font-medium hover:bg-purple-100 hover:text-purple-900">Register</Link>
        <Link to='/landing' className="rounded-lg px-3 py-2 text-purple-700 font-medium hover:bg-purple-100 hover:text-purple-900">Landing</Link>
        </nav>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter> 

    )

}

export default App;