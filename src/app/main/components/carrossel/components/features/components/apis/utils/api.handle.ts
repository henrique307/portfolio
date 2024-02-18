import { Injectable } from "@angular/core"

@Injectable({providedIn: 'root'})
export class ApiHandle {
    private readonly _URL = "https://portfolioapi-production.up.railway.app"

    async auth(nome: string, email: string) {
        try {
            return await fetch(`${this._URL}/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    email
                })
            }).then(res =>  res.json())
        } catch(e) {
            throw e
        }
    }

    async GetGatos(token: string) {
        try {
            return await fetch(`${this._URL}/gatos`, {
                headers: {
                    'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
        } catch (e) {
            throw e
        }
    }

    async GetCarros(token: string) {
        try {
            return await fetch(`https://portfolioapi-production.up.railway.app/carros`, {
                headers: {
                    'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
        } catch (e) {
            throw e
        }
    }
}