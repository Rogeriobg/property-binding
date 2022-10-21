import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.scss']
})
export class SociosComponent {

@Input() socios: any = []  ;



  constructor() {
this.socios.push({nome:'Rogerio', contato:'12345'});
this.socios.push({nome:'Roberto', contato:'12345'});
this.socios.push({nome:'Ricardo', contato:'12345'});
this.socios.push({nome:'Rosenildo', contato:'12345'});
}

}
