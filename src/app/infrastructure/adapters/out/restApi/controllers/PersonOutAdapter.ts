import { Injectable } from "@angular/core";
import { PersonOutPort } from "../../../../../domain/ports/out/personOutPort";
import { PersonServices } from "../services/PersonServices";


@Injectable({
    providedIn: "root",
  })
export class PersonOutAdapter extends PersonOutPort{

    constructor(private personService: PersonServices){
        super();
    }
    
    getPerson(idPerson: number) {
        
            return this.personService.getPerson(idPerson);
         
    }

    
}