import Landing from "./pages/Landing"
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Button = styled.button`
background: red;
color: white;
font-size: 1rem;
`

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Dashboard</div>} />
                <Route path="/register" element={<div>Register</div>} />
                <Route path="/landing" element={<Landing />} />
                <Route path="*" element={<h1 className="text-3xl text-red-800 font-bold underline">Error</h1>} />
            </Routes>
        </BrowserRouter> 

    )

}

export default App;