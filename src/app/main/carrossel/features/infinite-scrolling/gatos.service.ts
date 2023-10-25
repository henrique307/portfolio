import { Injectable } from "@angular/core";
import { ApiService } from "src/utils/api.service";

@Injectable({ providedIn: 'root' })
export class GatosService {

    private _token: string = "";

    constructor(private readonly apiService: ApiService) {
        try {
            let res = this.apiService.conecta();
        } catch(e) {
            throw e
        }
    }



}