import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
  })
export class PersonServices{
    constructor() { }

    getPerson(idPerson:number)
    {
        console.log("llego hasta el servicio")
    }
    
}