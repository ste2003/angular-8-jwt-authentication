import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filtroEscritos'
})
export class FiltroEscritosPipe implements PipeTransform{
    transform(allEscritos: any, filtro: number) {   
      if (!filtro) return allEscritos;     
      return allEscritos.filter(escrito => escrito.escrito==filtro)
    }
}