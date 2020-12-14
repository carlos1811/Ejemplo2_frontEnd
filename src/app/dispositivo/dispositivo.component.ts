import { Component, OnInit } from '@angular/core';
import { Dispositivo } from './dispositivo';
import { DispositivoService } from './dispositivo.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-clientes',
  templateUrl: './dispositivo.component.html'
})
export class DispositivoComponent implements OnInit {

  dispositivo: Dispositivo[];

  constructor(private dispositivoService: DispositivoService) { }

  ngOnInit() {
    this.dispositivoService.getClientes().subscribe(
      dispositivo => this.dispositivo = dispositivo
    );
  }

  delete(dispositivo: Dispositivo): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al dispositivo ${dispositivo.dispositivo}?`,
   //   type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
  //    confirmButtonClass: 'btn btn-success',
  //    cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.dispositivoService.delete(dispositivo.id).subscribe(
          response => {
            this.dispositivo = this.dispositivo.filter(cli => cli !== dispositivo)
            Swal.fire(
              'dispositivo Eliminado!',
              `dispositivo ${dispositivo.dispositivo} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
