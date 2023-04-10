import { CrearPartidoFormulario } from "../components/CrearPartidoFormulario.js"

const CrearPartido= ()=>
    `
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div class="col-md-8">
                <div class="card-body">
                    <h2 class="text-center mt-4">Crear Partido</h2>
                    ${CrearPartidoFormulario()}
                    <div class="mt-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `


export {CrearPartido}