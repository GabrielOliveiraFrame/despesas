import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DespesasService } from 'src/app/services/despesas.service';
import { TiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'app-despesas-senador',
  templateUrl: './despesas-senador.component.html',
  styleUrls: ['./despesas-senador.component.css']
})
export class DespesasSenadorComponent implements OnInit {
  nomeSenador!: string;
  despesas!: any;
  dataSource!: any;

  id!: any;

  tipos!: any;
  valorTipos = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
  valorTotal = 0.00;

  displayedColumns = ['tipo', 'fornecedor', 'data', 'valor'];

  constructor(
    private despesasService: DespesasService,
    private tiposService: TiposService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.despesasService.getById(this.id).subscribe((data: any) => {
      this.nomeSenador = data[0]?.nomeSenador;
      this.despesas = data[0]?.despesas;
      this.dataSource = new MatTableDataSource(data[0]?.despesas);
      this.calculoValorTipos(this.despesas);
      this.calculoValorTotal(this.valorTipos);
    });

    this.tiposService.getAll().subscribe((data: any) => {
      this.tipos = data;
    });
  }

  calculoValorTipos(data: any){
    data.forEach((despesa: any) => {
      despesa.tipo == 1 ? this.valorTipos[0] += despesa.valor : null;
      despesa.tipo == 2 ? this.valorTipos[1] += despesa.valor : null;
      despesa.tipo == 3 ? this.valorTipos[2] += despesa.valor : null;
      despesa.tipo == 4 ? this.valorTipos[3] += despesa.valor : null;
      despesa.tipo == 5 ? this.valorTipos[4] += despesa.valor : null;
      despesa.tipo == 6 ? this.valorTipos[5] += despesa.valor : null;
      despesa.tipo == 7 ? this.valorTipos[6] += despesa.valor : null;
    });
  }

  calculoValorTotal(data: any){
    data.forEach((valor: any) => {
      this.valorTotal += valor;
    })
  }

}
