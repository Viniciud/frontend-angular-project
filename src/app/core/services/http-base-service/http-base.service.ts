import {
  HttpClient,
  HttpParams,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { LoadingService } from '../loading-service/loading.service';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService {
  constructor(
    private clienteHttp: HttpClient,
    private dialog: MatDialog,
    private loadingService: LoadingService
  ) {}
}
