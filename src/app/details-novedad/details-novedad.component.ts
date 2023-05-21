import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NovedadService } from '../_services/novedad.service';


@Component({
  selector: 'app-details-novedad',
  templateUrl: './details-novedad.component.html',
  styleUrls: ['./details-novedad.component.css']
})
export class DetailsNovedadComponent implements OnInit {
  form: any = {};
  isSignUpFailed = false;
  errorMessage = '';
  isSuccessful = false;
  isFindFailed = false;
  estado = '';
  observa = '';
  secretaria = '';
  fecha = '';
  currentNovedad = null;
  //campo='';

  constructor(private novedadService: NovedadService, private route: ActivatedRoute,
    private router: Router) { 
    
  }

  ngOnInit() {
    console.log("on init details-novedad id", this.route.snapshot.paramMap.get('id'));   
    this.getNovedad(this.route.snapshot.paramMap.get('id'));
  }

  getNovedad(id){
    console.log("id en getNovedad:", id);
    this.novedadService.buscarEscrito(id).subscribe(
        data => {
          this.currentNovedad = JSON.parse(data);
          //this.campo=JSON.parse(this.currentNovedad).escrito;
          //this.campo=this.currentNovedad.escrito;
          console.log("en buscar escrito: currentNovedad.escrito", JSON.parse(data).escrito);
            //this.escrito = JSON.parse(data).escrito;
            //this.estado = JSON.parse(data).estado;
            //this.observa = JSON.parse(data).observa;
            //this.secretaria = JSON.parse(data).secretaria;
            //this.fecha = JSON.parse(data).fecha;
            //this.isSuccessful = true;
            //this.isFindFailed = false;
        },
        err => {          
          console.log(err);
            this.errorMessage = JSON.parse(err.error).message;
            //this.isFindFailed = true;
          }
    )
  }

  onSubmit() {
    console.log("on submit");
  }
  updateNovedad(){
    
  }
}
