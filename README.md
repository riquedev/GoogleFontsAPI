# Google Fonts API
Obtenha os metadados de todas fontes disponíveis no Google Fonts, direto da API.
Ele permite a criação de aplicativos dinâmicos ao poder consultar fontes do Google e obter uma lista precisa das famílias atualmente disponíveis.

### Progresso
* Possibilitar retorno de fontes em querys como: familia, categoria e variantes
* Download utilizando o 'files'
* Possibiltiar uso do IndexDB
##### Atenção, isto é apenas o que pretendo fazer.

### Como utilizar

```javascript
// Indique sua chave a API
GoogleFontsAPI.key = "SUA-CHAVE";
// Requisitanto fontes
GoogleFontsAPI.GetFonts();
// Visualizar listagem de fontes:
GoogleFontsAPI.fonts;
```
#### Dados disponíveis no retorno:
 * Categoria
 * Familia
 * Links dos arquivos (separados em font-weight)
 * Kind
 * Última Modificação
 * Subsets
 * Variantes (regular, itálico...)
 * Versão

