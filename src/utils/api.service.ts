import { Injectable } from "@angular/core";
import { ApiResponseInterface } from "./api-response.interface";

@Injectable({providedIn: 'root'})
export class ApiService {

    private readonly _URL = "https://portfolioapi-production.up.railway.app"
    private token: string = "";

    private async autentica(): Promise<string | undefined>  {
        return await fetch(`${this._URL}/auth`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: "sistema",
                email: "email@sistema.com"
            })

        }).then((res) => {
            if(res.ok) return res.json();
            throw { status: res.status, text: res.text() }
        }).then((json: any) => {
            return this.token = json.token ?? ""
        }).catch((e) => {
            throw `Ocorreu um erro ao fazer a autenticação com a API;\n\n${e.status}: ${e.text}`
        })
    }

    async retry(func: () => Promise<any[]>) {
        for(let i=0;i<2;i++) {
            try {
                return await func()
            } catch(e) {}
        }

        throw "Houve um erro ao fazer a authenticação com o servidor";
    }

    async getCarros() {
        return await this.retry(async () => {
            return await fetch(`${this._URL}/carros`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
    
            })
            .then(async (res) => {
                if(res.ok) return res.json();
                if(res.status === 401) await this.autentica()
                throw { status: res.status, text: res.text() }
            })
            .then(json => {
                return json
            })
            .catch(e => {
                throw `Ocorreu um erro ao pegar os dados da API;\n\n${e.status}: ${e.text}`
            })
        })
    }

    async getGatos() {
        return await this.retry(async () => {
            return await fetch(`${this._URL}/gatos`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
    
            })
            .then(async (res) => {
                if(res.ok) return res.json();
                if(res.status === 401) await this.autentica()
                throw { status: res.status, text: res.text() }
            })
            .then(json => {
                return json
            })
            .catch(e => {
                throw `Ocorreu um erro ao pegar os dados da API;\n\n${e.status}: ${e.text}`
            })
        })
    }
}