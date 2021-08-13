import React, {Fragment, useState, useEffect}from 'react';
import Navbar from './components/Navbar';
import Mediciones from './components/Mediciones';
import Configuracion from './components/Configuracion';

function App() {
  
  const [config, setConfig] = useState({
            Id:0,
            Modelo:'',
            Temperatura:0,
            Fecha_Medicion:0,
            Hora:0

  })
 
  const [sensores, setSensores] = useState([])

  
       useEffect(()=> {
       const getsensores = ()=>{
       fetch('http://localhost:9000/api')
       .then(res => res.json())
       .then(res => setSensores(res))
     }
     getsensores()
  },[])
  
  return (
    <Fragment>
     <Navbar brand ='Aplicacion de Sensores'/>
       <div className="container">
         <div className="row">
          <div className="col-7">
            <h2 style={{textAlign:'center'}}>Listado de Mediciones</h2>
            <Mediciones sensores={sensores}/>
           </div>
           <div className="col-5">
           <h2 style={{textAlign:'center'}}>Configuracion del Sensor</h2>
           <Configuracion config={config} setConfig={setConfig}/>
          </div>

         </div>
       </div>
    </Fragment>
  );
}

export default App;
