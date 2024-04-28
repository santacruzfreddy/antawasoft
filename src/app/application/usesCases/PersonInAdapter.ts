import { Injectable } from "@angular/core";
import { PersonInPort } from "../../domain/ports/in/PersonInPort";
import { PersonOutPort } from "../../domain/ports/out/personOutPort";

@Injectable({
    providedIn: "root",
  })
export class PersonInAdapter extends PersonInPort  {    

    constructor(private personOutPort: PersonOutPort){
        super();       
    }


    getPerson(idPerson: number) {
        console.log("encontre la persona")
      return this.personOutPort.getPerson(idPerson)
    }

}