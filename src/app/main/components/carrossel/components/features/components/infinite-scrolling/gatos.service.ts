import { Injectable } from "@angular/core";
import { Gato } from "./interface/gato.interface";

@Injectable({ providedIn: 'root' })
export class GatosService {

    private readonly _URL = "https://pokeapi.co/api/v2/pokemon"
    
    async getAll(page: number): Promise<Gato[]> {
        let pokemons = [];
        let pokemonsPerPage = 20;

        for (let i = (page - 1) * pokemonsPerPage + 1; i <= page * pokemonsPerPage; i++) {
            pokemons.push(await fetch(`${this._URL}/${i}`).then(res => res.json()));
        }

        return pokemons;
    }

}

// FUTURO USO DA API PORTFOLIO NESSA PARTE
// @Injectable({ providedIn: 'root' })
// export class GatosService extends ApiService{
    
//     constructor(private readonly apiService: ApiService) {
//         super()
//     }

//     async getAll(search?: string[]): Promise<Gato[]> {

//         return await fetch(`${this._URL}/gatos`, {
//             headers: {
//                 'Authorization': `Bearer ${await this._token}`
//             }
//         }).then(res => res.json())
//     }

// }