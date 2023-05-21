import { Component, OnInit } from '@angular/core';
import { NotificaService } from '../_services/notifica.service';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isFindFailed = false;
  content = '';
  estado = '';
  observa = '';
  secretaria = '';
  fecha = '';
  escrito1 = '';

  constructor(private notificaService: NotificaService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    console.log(this.form);
    this.notificaService.buscarEscrito(this.form.escrito).subscribe(
      data => {
        this.content = data;     

        console.log(this.content);
        console.log(JSON.parse(data).escrito);
        this.escrito1 = JSON.parse(data).escrito;
        this.estado = JSON.parse(data).estado;
        this.observa = JSON.parse(data).observa;
        this.secretaria = JSON.parse(data).secretaria;
        this.fecha = JSON.parse(data).fecha;
        console.log(JSON.parse(data).estado);
        this.isSuccessful = true;
        this.isFindFailed = false;
      },
      err => {
        this.content = JSON.parse(err.error).message;
        this.isFindFailed = true;
      }
    );
  }
}
