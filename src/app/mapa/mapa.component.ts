import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }
  lat1: number = 38.9554156;
  lng1: number = -3.9809874;
  lat2: number = 51.670000;
  lng2: number = 7.559007;
  lat3: number = 51.660000;
  lng3: number = 7.99007;
  lat4: number = 51.64418;
  lng4: number = 7.339007;

  ngOnInit() {
  }

}
