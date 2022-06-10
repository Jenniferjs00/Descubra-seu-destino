const elementoResposta = document.querySelector("#resposta")
const inputPerguta = document.querySelector ("#inputPergunta")
const butonPerguntar = document;querySelector('#butonPerguntar')
 const respostas =[
   "Com certeza!",
   "Não tenho tanta certeza.",
   "É decidimos assim.",
   "Não conte com isso",
   "Sem dúvidas.",
   "kdc",
   "osjd",
   "wdo",
   "ifd",
   "odfi",
 ]

//clicar fazer pergunta
function fazerPergunta(){

  if(inputPerguta.value == ""){
    alert ("digite sua pergunta")
    return
  }

  butonPerguntar.setAttribute("disabled",true)

  const pergunta = "<div>" + inputPerguta.value + "</div>"

  //gerar numero aleatorio
  const totalRespostas= respostas.length
  const numeroAleatorio= Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = respostas + respostas [numeroAleatorio]

  elementoResposta.style = opacity = 1;

  //sumir a resposta
  setTimeout(function () {
  elementoResposta.style = opacity = 0;
  butonPerguntar.removeAttribute('disabled')
  },3000)
}