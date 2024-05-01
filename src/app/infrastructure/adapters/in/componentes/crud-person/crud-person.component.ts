import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { PersonInAdapter } from '../../../../../application/usesCases/PersonInAdapter';
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
