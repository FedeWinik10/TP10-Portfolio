import React from 'react'

export default function InfoPersonal ()  {
  return (
   <>
    <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Mi perfil</span></h1>
          <div className="contenedor">
            <img className="img2"  src="../images/yo.jpg" />
            <ul className="list-group TablaInfo">
              <li className="list-group-item">Nacimiento:02 de octubre de 2005 </li>
              <li className="list-group-item">Género: Masculino</li>
              <li className="list-group-item">Edad: 18 años</li>
            </ul>
          </div>

          <br></br>
          <br></br>
        </div>
   </>
  )
}