import React from 'react';

const SensorList = ({sensores})=>{
   return(
         <table className="table">
             <thead>
                <tr>
                    <th>Id</th>
                    <th>Modelo</th>  
                    <th>Temperatura</th>
                    <th>Fecha</th> 
                    <th>Hora</th> 
                </tr>

             </thead>

             <tbody>
                 {sensores.map(sensor =>(
                     <tr key={sensor.Id}>
                     <th>{sensor.Id}</th>
                     <th>{sensor.Modelo}</th>  
                     <th>{sensor.Temperatura}</th>
                     <th>{sensor.Fecha_Medicion}</th>
                     <th>{sensor.Hora}</th> 
                     </tr> 
                 )
                   
                 )}
                   
             </tbody>  


            </table>


   );
   }
      export default SensorList;