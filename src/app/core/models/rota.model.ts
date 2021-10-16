export class Rota {
  constructor(
    private urlApi: string | any,
    private recurso: string | string[] | any,
    private parametros?: object | any
  ) {}

  obterUri(): string {
    if (typeof this.recurso === 'string') {
      this.recurso = new Array(this.recurso);
    }
    this.recurso = '/' + this.recurso.join('/');
    return this.urlApi + this.recurso;
  }

  obterQueryStringDeParametros(): string {
    if (this.parametros) {
      const urlQueryString: string = Object.entries(this.parametros).reduce(
        this.reduzirParametrosAQueryString,
        ''
      );
      return encodeURI(urlQueryString);
    }
    return '';
  }

  private reduzirParametrosAQueryString(
    queryString: any,
    parametro: any,
    indice: any,
    arrayParametros: any
  ): string {
    return (
      queryString +
      parametro[0] +
      '=' +
      parametro[1] +
      (indice === arrayParametros.length - 1 ? '' : '&')
    );
  }

  ehValida(): boolean {
    return this.urlApi != null && this.recurso != null;
  }
}
