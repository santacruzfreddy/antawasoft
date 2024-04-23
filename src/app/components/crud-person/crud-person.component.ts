import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
@Component({
  selector: 'app-crud-person',
  standalone: true,
  imports: [InputTextModule,FieldsetModule],
  templateUrl: './crud-person.component.html',
  styleUrl: './crud-person.component.scss'
})
export class CrudPersonComponent {

}
