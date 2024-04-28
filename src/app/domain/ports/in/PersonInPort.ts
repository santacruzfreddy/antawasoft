import { Injectable } from "@angular/core";


export abstract  class PersonInPort{
    abstract getPerson(idPerson: number) : any ;
}