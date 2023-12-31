import React from 'react'
import { Link } from "react-router-dom";

export const CardMisCreaciones = ({post}) => {
  return (
    <div class="card shadow border-0 rounded-4 mb-5">
    <Link to={`/DetallesMisCreaciones/${post.id}`}  >          
        <div className="text-center">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">{post.titulo}</span></h1>
        </div>  
        <div class="card-body p-5"> 
            <div class="row align-items-center gx-5">
                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                        <div class="mb-2">
                        <div class="small fw-bolder">{post.titulo}</div> 
                        </div>
                        <div class="fst-italic">
                        </div>
                    </div>
                </div>
                <div class="col-lg-8"><div>{post.descripcion}</div></div>
            </div>
        </div>
    </Link>
</div>
  )
}
