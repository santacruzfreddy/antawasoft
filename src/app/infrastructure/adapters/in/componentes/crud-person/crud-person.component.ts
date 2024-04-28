import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { PersonInAdapter } from '../../../../../application/usesCases/PersonInAdapter';
import { PersonInPort } from '../../../../../domain/ports/in/PersonInPort';
import { PersonOutAdapter } from '../../../out/restApi/controllers/PersonOutAdapter';
import { PersonOutPort } from '../../../../../domain/ports/out/personOutPort';
@Component({
  selector: 'app-crud-person',
  standalone: true,
  imports: [InputTextModule,FieldsetModule],
  providers:[PersonInAdapter],
  templateUrl: './crud-person.component.html',
  styleUrl: './crud-person.component.scss'
})
export class CrudPersonComponent implements OnInit {

  constructor(private personInAdapter:PersonInAdapter){
    

  }
  ngOnInit(): void {
    this.personInAdapter.getPerson(222)
  }



}
