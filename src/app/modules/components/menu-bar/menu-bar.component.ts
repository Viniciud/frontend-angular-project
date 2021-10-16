import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];
  display: Boolean = true;

  ngOnInit() {
    this.items = [
      {
        label: 'Relatório',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Notas',
        icon: 'pi pi-fw pi-book',
      },
      {
        label: 'Alunos',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
