import { Rota } from './rota.model';

describe('Rota', () => {
  const MOCK_ROTA_BASE_API = 'https://backend.com/api';

  describe('transformarParametrosEmQueryString', () => {
    it('deve retornar query string vazia para objeto de parâmetros nulo', () => {
      const rota = new Rota('', '', null);
      const queryString = rota.obterQueryStringDeParametros();
      expect(queryString).toBe('');
    });

    it('deve retornar query string vazia para objeto de parâmetros vazio', () => {
      const rota = new Rota('', '', {});
      const queryString = rota.obterQueryStringDeParametros();
      expect(queryString).toBe('');
    });

    it('deve construir query string para objeto de parâmetros com 1 chave', () => {
      const parametros = {
        chaveA: 'valorA',
      };
      const rota = new Rota('', '', parametros);
      const queryString = rota.obterQueryStringDeParametros();
      expect(queryString).toBe('chaveA=valorA');
    });

    it('deve construir query string para objeto de parâmetros não nulo', () => {
      const parametros = {
        chaveA: 'valorA',
        chaveB: 'valorB',
        chaveC: 'valorC',
      };
      const rota = new Rota('', '', parametros);
      const queryString = rota.obterQueryStringDeParametros();
      expect(queryString).toBe('chaveA=valorA&chaveB=valorB&chaveC=valorC');
    });
  });

  describe('formatarRota', () => {
    it('deve retornar rota com o caminho completo para 1 nível', () => {
      const rota = new Rota(MOCK_ROTA_BASE_API, 'recurso1', {});
      const rotaFormatada = rota.obterUri();
      expect(rotaFormatada).toBe(MOCK_ROTA_BASE_API + '/recurso1');
    });

    it('deve retornar rota com o caminho completo para mais de 1 nível', () => {
      const recurso: string[] = ['recurso1', 'subRecurso1', 'subRecurso2'];
      const rota = new Rota(MOCK_ROTA_BASE_API, recurso, {});
      const rotaFormatada = rota.obterUri();
      expect(rotaFormatada).toBe(
        MOCK_ROTA_BASE_API + '/recurso1/subRecurso1/subRecurso2'
      );
    });
  });

  describe('ehValida', () => {
    it('deve retornar falso para api base nula', () => {
      const rota = new Rota(null, 'recurso1', {});
      const ehValida = rota.ehValida();
      expect(ehValida).toBeFalsy();
    });

    it('deve retornar falso para recurso nulo', () => {
      const rota = new Rota(MOCK_ROTA_BASE_API, null, {});
      const ehValida = rota.ehValida();
      expect(ehValida).toBeFalsy();
    });

    it('deve retornar verdadeiro para api base e recurso não nulos', () => {
      const rota = new Rota(MOCK_ROTA_BASE_API, 'recurso1', {});
      const ehValida = rota.ehValida();
      expect(ehValida).toBeTruthy();
    });
  });
});
