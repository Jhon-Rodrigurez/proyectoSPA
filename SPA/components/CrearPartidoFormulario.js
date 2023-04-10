const CrearPartidoFormulario= ()=>{

    const vista=
    `
    <div class="container mt-5">
        <div class="row">
            <div class="col col-md-12">
                <form>
                    <div class="mb-3">
                      <label for="fecha" class="form-label fw-bold fs-5">Fecha</label>
                      <input type="date" class="form-control" id="fecha" placeholder="Ingresa la fecha">
                    </div>
                    <div class="mb-3">
                      <label for="equipolocal" class="form-label fw-bold fs-5">Equipo local</label>
                      <select class="form-select" name="equipolocal" id="equipolocal">
                        <option value="1">Seleccione</option>
                        <option value="2">Cúcuta</option>
                        <option value="3">Medellín</option>
                        <option value="4">Bucaramanga</option>
                        <option value="5">Cali</option>
                      </select>
                    </div>
                    <div class="mt-3">
                      <label for="equipovisitante" class="form-label fw-bold fs-5">Equipo visitante</label>
                      <select class="form-select" name="equipovisitante" id="equipovisitante">
                        <option value="1">Seleccione</option>
                        <option value="2">Cúcuta</option>
                        <option value="3">Medellín</option>
                        <option value="4">Bucaramanga</option>
                        <option value="5">Cali</option>
                      </select>
                    </div>
                    <div class="row-cols-2">
                      <div class="mt-3 col col-sm-12 col-md-4 col-lg-6">
                        <label for="goleslocal" class="form-label fw-bold fs-5">Goles local</label>
                        <input type="number" class="form-control" id="goleslocal">
                      </div>
                    </div>
                    <div class="row-cols-2">
                      <div class="mt-3 col col-sm-12 col-md-4 col-lg-6">
                        <label for="golesvisitante" class="form-label fw-bold fs-5">Goles visitante</label>
                        <input type="number" class="form-control" id="golesvisitante">
                      </div>
                    </div>
                    <div class="container">                                                                       
                      <div class="row justify-content-center mt-3">
                        <div class="col-md-6 text-center">                                                        
                          <button type="submit" class="btn btn-primary border-5 mt-3 fw-bold fs-5" style="width: 90%; height: 80%;">Crear partido</button>                              
                        </div>                                                                                      
                      </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        
    `
    return vista
}

export {CrearPartidoFormulario}