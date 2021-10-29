import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})
export class TelaLoginComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    email: new FormControl(null),
    senha: new FormControl(null),
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

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
    }
    if (
      this.formGroup.value.email == 'admin@gmail.com' &&
      this.formGroup.value.senha == 'senha'
    ) {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/gestao-professores']);
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
