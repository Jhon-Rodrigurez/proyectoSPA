
const RegistrarseFormulario= ()=>{

    const vista=
    `
    <div class="container mt-5">
        <h2 class="text-center">Registro de formulario</h2>
        <form>
          <div class="mb-3">
            <label for="nombre" class="form-label fw-bold fs-5">Nombre</label>
            <input type="text" class="form-control" id="nombre" placeholder="Ingresa tu nombre">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label fw-bold fs-5">Correo electrónico</label>
            <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico">
          </div>
          <div class="mb-3">
            <label for="usuario" class="form-label fw-bold fs-5">Usuario</label>
            <input type="text" class="form-control" id="usuario" placeholder="Ingresa tu nombre de usuario">
          </div>
          <div class="mb-3">
            <label for="contraseña" class="form-label fw-bold fs-5">Contraseña</label>
            <input type="password" class="form-control" id="contraseña" placeholder="Ingresa tu contraseña">
          </div>
          <div class="container">                                                                       
            <div class="row justify-content-center mb-5">
              <div class="col-md-6 text-center">                                                        
                <button type="submit" class="btn btn-primary border-5 mt-3 fw-bold fs-5" style="width: 90%; height: 80%;" onclick="submitForm()">Registrarse</button>                              
              </div>                                                                                      
            </div>
          </div>
        </form>
      </div>
  
      <script>
        function submitForm() {
          var nombre = $("#nombre").val();
          var email = $("#email").val();
          var usuario= $("#usuario").val();
          var contraseña = $("#contraseña").val();
          alert("Nombre: " + nombre + "\nCorreo electrónico: " + email + "\nUsuario: " + usuario + "\nContraseña: " + contraseña);
          return false;
        }
      </script>
    `

    return vista
}

export {RegistrarseFormulario}