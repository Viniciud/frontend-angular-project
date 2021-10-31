import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
  providers: [MessageService],
})
export class TelaLoginComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    email: new FormControl(null),
    senha: new FormControl(null),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.inicializarFormLogin();
  }

  login() {
    if (
      this.formGroup.value.email == 'professor@gmail.com' &&
      this.formGroup.value.senha == 'senha'
    ) {
      localStorage.setItem('role', 'professor');
      this.router.navigate(['/gestao-alunos']);
    } else if (
      this.formGroup.value.email == 'admin@gmail.com' &&
      this.formGroup.value.senha == 'senha'
    ) {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/gestao-professores']);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Mensagem do sistema!',
        detail: 'Email ou senha inválidos',
      });
    }
  }

  inicializarFormLogin() {
    this.formGroup.controls.email.valueChanges.subscribe((value: any) => {
      console.log('VALUE EMAIL', value);
    });

    this.formGroup.controls.senha.valueChanges.subscribe((value: any) => {
      console.log('VALUE SENHA', value);
    });
  }
}
