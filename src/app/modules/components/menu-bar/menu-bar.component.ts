import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];
  display: Boolean = true;

  @Output() showComponent = new EventEmitter();

  ngOnInit() {
    this.items = [
      {
        label: 'Relatório',
        icon: 'pi pi-fw pi-file',
        command: () => {
          this.showComponent.emit(1);
        },
      },
      {
        label: 'Notas',
        icon: 'pi pi-fw pi-book',
        command: () => {
          this.showComponent.emit(3);
        },
      },
      {
        label: 'Alunos',
        icon: 'pi pi-fw pi-user',
        command: () => {
          this.showComponent.emit(2);
        },
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.showComponent.emit(4);
        },
      },
    ];
  }
}
