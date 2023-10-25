import { Injectable } from "@angular/core";
import { ApiResponseInterface } from "./api-response.interface";

@Injectable({providedIn: 'root'})
export class ApiService {

    private readonly _URL = "https://api-portfolio-henrique307-6cc944971cba.herokuapp.com"

    async conecta(): Promise<string | undefined>  {
        return await fetch(`${this._URL}/auth`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: "sistema"
            })
            
        }).then((res) => {
            if(res.ok) return res.json()
            throw { status: res.status, text: res.text() }
        }).then((json: ApiResponseInterface) => {
            return json.token
        }).catch((e) => {
            throw `Ocorreu um erro ao fazer a autenticação com a API;\n${e.status}: ${e.text}`
        })
    }
}