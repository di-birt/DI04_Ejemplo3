import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  tipoDeChartSeleccionado: string = "bar-chart";

  //constructor(private router: Router) { }
  constructor(){}

  ngOnInit() {
  }

  segmentChanged(event: any) {
    /*Añadimos la ruta si fuese necesario.
     * En ese caso añadir:
     *  - import { Router } from '@angular/router';
     *  - constructor(private router: Router) { }
     */
    //this.router.navigate(['/tabs/tab5', event.detail.value]);
    //Recogemos el tipo de chart (bar-chart, line-chart o pie-chart), mediante event.detail.value
    this.tipoDeChartSeleccionado = event.detail.value;
  }

}
