import { Injectable } from "@angular/core";


export abstract class PersonOutPort
{
    abstract getPerson(idPerson: number) : any ;
}