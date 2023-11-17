var keyApiChave = '161039e4cfe82dac0b2ca97aa6302058'

function fazGet(url) {
  let request = new XMLHttpRequest()

  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criaLinha(usuario) {
  console.log(usuario)
  linha = document.createElement('tr')
  tdId = document.createElement('td')
  tdNome = document.createElement('td')
  tdId.innerHTML = usuario.id
  tdNome.innerHTML = usuario.title

  linha.appendChild(tdId)
  linha.appendChild(tdNome)

  return linha;
}

function main() {
  let data = fazGet(`https://api.themoviedb.org/3/movie/popular?api_key=${keyApiChave}&language=pt-BT`)
  let dataJason = JSON.parse(data);

  if (dataJason.results) {
    let resultados = dataJason.results;
    let tabela = document.querySelector('#tabela')

    resultados.forEach(element => {
      let linha = criaLinha(element);
      tabela.appendChild(linha);
    });
  }
}

main()
