import React from 'react';


const Configuracion = ({config,setConfig})=>{

const handleChange = event =>{
         setConfig({
             ...config,
            [event.target.name]: event.target.value

         })

    }
        
        let{Modelo,Temperatura,Fecha_Medicion,Hora}=config
        
        const handleSubmit = () =>{
            
            Temperatura = parseInt(Temperatura,10)
           
            Hora = parseInt(Hora,10)

        //validar configuracion del sensor
         
        if(Modelo === '' ||Temperatura === ''||Fecha_Medicion=== '' ||Hora <= 0 ){
            alert('Complete toda la Informacion')
            return 
        }
          // Listar datos
          
              const requestInit = {
              method: 'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(config)

          }
           fetch('http://localhost:9000/api',requestInit)
          .then(res => res.json())
          .then(res => console.log(res))
          
           // setiando los datos del Sensor
            setConfig({
            Id:'',
            Modelo:'',
            Temperatura:'',
            Fecha_Medicion:'',
            Hora:''

          })
          
           }
     
   return(
           <form onSubmit={handleSubmit}>
              <div className="mb-3"> 
                <label htmlFor="modelo"className="form-label">Modelo</label>
                <input /*value={Modelo}*/ name="modelo" onChange={handleChange} type="text" id="modelo"className="form-control"/>
              </div>
                <div className="mb-3"> 
                <label htmlFor="temperatura"className="form-label">Temperatura</label>
                <input /*value={Temperatura}*/ name="temperatura" onChange={handleChange} type="text" id="temperatura" className="form-control"/>
              </div>
              <div className="mb-3"> 
                <label htmlFor="fecha_medicion"className="form-label">Fecha_Medicion</label>
                <input /*value={Fecha_Medicion}*/ name="fecha_Medicion" onChange={handleChange} type="text" id="fecha_medicion" className="form-control"/>
              </div>
              <div className="mb-3"> 
                <label htmlFor="hora"className="form-label">Hora</label>
                <input /*value={Hora}*/  name="hora" onChange={handleChange} type="text" id="hora" className="form-control"/>
              </div>
               <button  type="submit" className="btn btn-primary">Submit</button>
           </form>



   );

} 
export default Configuracion;