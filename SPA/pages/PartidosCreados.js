import { PartidoCard } from "../components/PartidoCard.js"
import getPartidos from "../connections/helpers/getPartidos.js"


const PartidosCreados= async ()=> {

    const partidos= await getPartidos()

    return (
    `
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div class="col-md-8">
                <div class="card-body">
                    <h2 class="text-center">Partidos Creados</h2>
                    ${
                        partidos.map(partido=>
                            PartidoCard(partido, true)
                        )

                    }
                    <div class="mt-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
}

export {PartidosCreados}