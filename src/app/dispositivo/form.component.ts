import { Component, OnInit } from '@angular/core';
import {Dispositivo} from './dispositivo';
import {DispositivoService} from './dispositivo.service';
import {Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  dispositivo: Dispositivo = new Dispositivo()
   titulo:string = "Crear Dispositivo"

  constructor(private clienteService: DispositivoService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarDispositivo()
  }

  cargarDispositivo(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (dispositivo) => this.dispositivo = dispositivo)
      }
    })
  }

  create(): void {
    this.clienteService.create(this.dispositivo)
      .subscribe(dispositivo => {
        this.router.navigate(['/dispositivo'])
        Swal.fire('Nuevo dispositivo', `dispositivo ${dispositivo.dispositivo} creado con éxito!`, 'success')
      }
      );
  }

  update():void{
    this.clienteService.update(this.dispositivo)
    .subscribe( dispositivo => {
      this.router.navigate(['/dispositivo'])
      Swal.fire('dispositivo Actualizado', `dispositivo ${dispositivo.dispositivo} actualizado con éxito!`, 'success')
    }

    )
  }

}
