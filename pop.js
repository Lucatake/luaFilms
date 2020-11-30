const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

//cria cards dos filmes pupulares
function MostrarFilmesPop( ){
  //executar AJAX
  
  $.ajax({
      // Passar a URL ENDPOINT BASE + /movie/popular
      url: TMDB_ENDPOINT_BASE + '/movie/popular',
      data: {
          api_key: 'c2f4c89b537808c194cac27dae3a091e'
      }
  })
      
  // Receber o JSON
  .done(function (data) {
  
      let codigo_html = '';
      let titulo_html = "";
        titulo_html += `<h1 class="lançamento" >FILMES POPULARES</h1>`;
      // Montar os cards
      for (i=0; i< 10; i++) {
          // Concatenar o código do Card com os dados do JSON
          titulo = data.results[i].title;
          imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
          descricao = data.results[i].overview;
          id = data.results[i].id;

          codigo_html += `<div class="card mb-3" style="max-width: 700px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${imagem}" class="card-img" alt="${titulo}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">${titulo}</h2>
                <p class="card-text">${descricao}</p>
                <a href="https://www.themoviedb.org/movie/${id}-${titulo}" target="_blank" id="buttonc1" class="btn btn-primary">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>`;
      }
          
      // Repassar os cards para a página
      $('#pop').html(codigo_html);
      $("#titulo_session").html(titulo_html);
      sessionStorage.setItem("pop", false);
  });
}//end funcao MostrarFilmesPop

//cria cards dos filmes pupulares
function MostrarFilmesCin( ){
  //executar AJAX
  
  $.ajax({
      // Passar a URL ENDPOINT BASE + /movie/now_playing
      url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
      data: {
          api_key: 'c2f4c89b537808c194cac27dae3a091e'
      }
  })
      
  // Receber o JSON
  .done(function (data) {
  
      let codigo_html = '';
      let titulo_html = "";
        titulo_html += `<h1 class="lançamento" >FILMES NO CINEMA</h1>`;
      // Montar os cards
      for (i=0; i< 10; i++) {
          // Concatenar o código do Card com os dados do JSON
          titulo = data.results[i].title;
          imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
          descricao = data.results[i].overview;
          id = data.results[i].id;

          codigo_html += `<div class="card mb-3" style="max-width: 700px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${imagem}" class="card-img" alt="${titulo}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">${titulo}</h2>
                <p class="card-text">${descricao}</p>
                <a href="https://www.themoviedb.org/movie/${id}-${titulo}" target="_blank" id="buttonc1" class="btn btn-primary">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>`;
      }
          
      // Repassar os cards para a página
      $('#pop').html(codigo_html);
      $("#titulo_session").html(titulo_html);
      sessionStorage.setItem("cin", false);
  });
}//end funcao MostrarFilmesCin

$(document).ready(function () {
  $("#onpopulares").click(function () {sessionStorage.setItem("pop", true); });
  if(sessionStorage.getItem("pop") == "true") {MostrarFilmesPop();};
  $("#oncinema").click(function () {sessionStorage.setItem("cin", true); });
  if(sessionStorage.getItem("cin") == "true") {MostrarFilmesCin();};
});
