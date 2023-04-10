// const API= "https://rickandmortyapi.com/api/character"
const API= "https://8da80e3a-83d3-455a-a415-cecc213f9851.mock.pstmn.io"

export default async (id)=> {

    const apiUrl= (id) ? `${API}${id}` : API

    try {
        
        const response= await fetch(apiUrl)
        const data= await response.json()

        return data

    } catch(error) {
        console.log("Error fetch ", error)
    }
}