import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateMatricula from './CriarMatricula'
import ReadMatriculas from './ListarMatricula'
import UpdateMatricula from './AlterarMatricula'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/times/cadastrar" element={ <CreateMatricula/> }/>
                  <Route path="/times" element={ <ReadMatriculas/> }/>
                  <Route path="/times/alterar" element={ <UpdateMatricula/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



