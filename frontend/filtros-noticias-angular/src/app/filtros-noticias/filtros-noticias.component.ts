import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare global {
  interface Window {
    CardsNoticias:(categoria?: string) => void;
  }
}

@Component({
  selector: 'app-filtros-noticias',
  templateUrl: './filtros-noticias.component.html',
  styleUrls: ['./filtros-noticias.component.css']
})


// Creacion de clase para exportar y poder utilizar en otros archivos
export class FiltrosNoticiasComponent {
  // Propiedad para poder guardar la informacion de noticias del json [noticias] 
  infoNoticias: any[] = [];
  // Propiedad para poder noticias segun filtro 
  noticiasFiltradas: any[] = [];
  // Creacion de metodos segun seleccion de usuario
  categoriaSeleccionada = '';
  // Creacion de constructor para utilizar funciones http
  constructor(private http : HttpClient){}
  // Metodo para poder obtener json de todas las noticias
  JsonNoticias() {
    this.http.get<any[]>("/assets/cardsGeneralNoticias.json").subscribe(data =>{
      this.infoNoticias = data;
      this.noticiasFiltradas = data;
    }); 
  } 
  //  Ejecuta el componente cuando obtenga informacion y este listo para procesarla
  ngOnInit(){
    this.JsonNoticias();
  }
  // Creacion de motodo tipado para controlar la categoria seleccionada por usuario
  filtrar(categoria : string) {
    window.CardsNoticias(categoria)
  }
}
