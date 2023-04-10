import {EliminarPartidoBoton} from "../components/EliminarPartidoBoton.js"

const PartidoCard= (partido, mipartido)=>

    `
    <div class="card mt-3 mb-3">
        <div class="card-header mi-card">
            <div>
                ${partido.jugado ? 
                `<div class="mi-badge-jugado">Jugado</div>` : 
                `<div class="mi-badge-pendiente">Pendiente</div>`}
            </div>
                ${mipartido ? `<div><a href="" class="btn btn-primary btn-sm me-2">Editar</a> ${EliminarPartidoBoton()} </div>` : ""
            }
        </div>

        <div class="card-body">
            <div class="card-title">
                <a href="/partido/${partido.id}">${partido.fecha}
                    ${partido.equipolocal} vs ${partido.equipovisitante}
                </a>
            </div>
            <div class="card-text">
                Fecha: ${partido.fecha}
            </div>
            <div class="card-text">
                Usuario y fecha: ${partido.usuario}, ${partido.creado}
            </div>

        </div>
    </div>
    `


export {PartidoCard}