import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SenadoresService } from 'src/app/services/senadores.service';

@Component({
  selector: 'app-lista-senadores',
  templateUrl: './lista-senadores.component.html',
  styleUrls: ['./lista-senadores.component.css']
})
export class ListaSenadoresComponent implements OnInit {
  senadores!: Observable<any>

  constructor(
    private senadoresService: SenadoresService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.senadores = this.senadoresService.getAll();
  }

  navigate(id: any){
    this.router.navigate([`/despesas-senador/${id}`]);
  }

}
