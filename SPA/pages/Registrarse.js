import { RegistrarseFormulario } from "../components/RegistrarseFormulario.js"

const Registrarse= ()=>
    `
    <div class="container mt-5 mb-3">
        <div class="row justify-content-md-center">
            <div class="col-md-8">
                <div class="card-body">
                    <h1 class="text-center bg-dark text-white py-4">Registrar Usuario</h1>
                    ${RegistrarseFormulario()}
                    <div class="mt-3">
                        <div class="container">                                                                       
                            <div class="row justify-content-center" style="width: 100%; height: 100%;">
                              <div class="col-md-6 text-center">                                                        
                                <a href="#/iniciarsesion/">¿Ya tienes una cuenta? Iniciar sesión aquí.</a>                                   
                              </div>                                                                                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

export {Registrarse}