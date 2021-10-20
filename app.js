//API, Promesas

const url = 'https://api.github.com/users/';
let resultado;

function getUsuariosGit (id) {
    let urlId = url + id;

    fetch(urlId)
        .then (response => response.json())
        .then (json => {
            console.log(json)
            resultado = json
        })
        .catch (error => {
            console.log('Ocurrio un error al solicitar los datos')
        })
}

getUsuariosGit('aeolguin')
console.log(resultado)
console.log(resultado.url)