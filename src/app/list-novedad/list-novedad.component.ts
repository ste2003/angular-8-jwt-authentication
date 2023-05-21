import { Component, OnChanges, OnInit } from '@angular/core';
import { NovedadService } from '../_services/novedad.service';

@Component({
  selector: 'app-list-novedad',
  templateUrl: './list-novedad.component.html',
  styleUrls: ['./list-novedad.component.css']
})
export class ListNovedadComponent implements OnInit{
  
  isSuccessful = false;
  isFindFailed = false;
  contents = [];
  filterText = '';
  
  constructor(private novedadService: NovedadService) { }

  ngOnInit() {
    //this.contents =   [{id: "1",escrito:"uno"},{id: "2",escrito:"dos"}];
    console.log(this.filterText);
    
    this.novedadService.listar().subscribe(
      data => {
        this.contents = JSON.parse(data);         
        console.log(JSON.parse(data));      
       // this.filterStudents = this.contents;    
        this.isSuccessful = true;
        this.isFindFailed = false;
      },
      err => {
        this.contents = JSON.parse(err.error).message;
        this.isFindFailed = true;
      }
    );
  }
 
  onSubmit() {
  }

}

