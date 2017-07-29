/*
    Desenvolvido por: rique_dev (https://github.com/riquedev/)
    The MIT License (MIT)

    Copyright (c) [year] [fullname]

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var GoogleFontsAPI = new function () {

    // Google API Key
    this.key = "API-KEY";

    // Fonts List
    this.fonts = [];


    // Sort Type
    this.sort = 'popularity'; // this.sortList[2]
    this.sortList = ['alpha', 'date', 'popularity', 'style', 'trending'];

    // Url para requisição
    var api = "https://www.googleapis.com/webfonts/v1/webfonts?";


    // http Handler
    var httpGet = function (theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }


    // Salvar fonte na lista
    this.SaveFont = function (fontData) {

        // Checa se a fonte já existe
        var _count = this.fonts.filter(function (item) { return (item.family == fontData['family']) && (item.category == fontData['category']) && (item.lastModified == fontData['lastModified']) });

        // Se não existe (count == 0) então adicionamos a listagem
        if (_count.length == 0) {
            var fontX = {
                kind: fontData['kind'],
                family: fontData['family'],
                category: fontData['category'],
                variants: fontData['variants'],
                subsets: fontData['subsets'],
                version: fontData['version'],
                lastModified: fontData['lastModified'],
                files: fontData['files']
            }
            this.fonts.push(fontX);
        }
    }

    // Request Fonts
    this.GetFonts = function () {
        var response = httpGet(api + 'key=' + this.key + '&sort=' + this.sort);
        var responseFonts = JSON.parse(response);
        for (font in responseFonts['items']) {
            for (details in responseFonts['items'][font]) {
                var f = responseFonts['items'][font];
                this.SaveFont(f);
            }
        }
    }
}