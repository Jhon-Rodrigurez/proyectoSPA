
import { Nav } from "../layouts/Nav.js"
import { Footer } from "../layouts/Footer.js"
import { PartidosCreados } from "../pages/PartidosCreados.js"
import { Registrarse } from "../pages/Registrarse.js"
import { IniciarSesion } from "../pages/IniciarSesion.js"
import { PartidosUsuario } from "../pages/PartidosUsuario.js"
import { CrearPartido } from "../pages/crearPartido.js"
import { Error404 } from "../pages/Error404.js"
import getHash  from "../connections/helpers/getHash.js"
import resolverRutas from "../connections/helpers/resolverRutas.js"


const Rutas={
    "/": PartidosCreados,
    "/registrarse": Registrarse,
    "/iniciarsesion": IniciarSesion,
    "/partidosusuario": PartidosUsuario,
    "/crearpartido": CrearPartido,
    // "/partidodetalle": PartidoDetalle,
    // "/actualizarpartido": ActualizarPartido
}

const App= async ()=>{

    const header= document.querySelector("header")
    const main= document.querySelector("main")
    const footer= document.querySelector("footer")

    header.innerHTML= await Nav() /* await es una promesa de js */
    footer.innerHTML= await Footer()

    let ruta= await resolverRutas(getHash())
    let pagina= (Rutas[ruta]) ? Rutas[ruta] : Error404

    main.innerHTML= await pagina()

}

export {App}