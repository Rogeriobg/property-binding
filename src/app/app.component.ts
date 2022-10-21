import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

novos_socios: any = [];

constructor(){
  this.novos_socios.push({nome: 'socio1',contato:'111'});
  this.novos_socios.push({nome: 'socio2',contato:'222'});
  this.novos_socios.push({nome: 'socio3',contato:'333'});
  this.novos_socios.push({nome: 'socio4',contato:'444'});
  this.novos_socios.push({nome: 'socio5',contato:'555'});
  this.novos_socios.push({nome: 'socio6',contato:'666'});
  this.novos_socios.push({nome: 'socio7',contato:'777'});
}

}
