import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('role') == 'professor') {
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
            localStorage.removeItem('role');
            this.router.navigate(['/']);
          },
        },
      ];
    } else if (localStorage.getItem('role') == 'admin') {
      this.items = [
        {
          label: 'Relatório',
          icon: 'pi pi-fw pi-file',
          command: () => {
            this.showComponent.emit(1);
          },
        },
        {
          label: 'Professores',
          icon: 'pi pi-fw pi-user',
          command: () => {
            this.showComponent.emit(2);
          },
        },
        {
          label: 'Sair',
          icon: 'pi pi-fw pi-power-off',
          command: () => {
            localStorage.removeItem('role');
            this.router.navigate(['/']);
          },
        },
      ];
    }
  }
}
