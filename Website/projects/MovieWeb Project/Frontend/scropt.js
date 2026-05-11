const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";


  const main = document.getElementById("section");
  const form = document.getElementById("form");
  const search = document.getElementById("query");

returnMovies(APILINK)
  function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);

    // MOVE OUTSIDE: Create the single row container before the loop
    const div_row = document.createElement('div');
    div_row.setAttribute('class', 'row');

    data.results.forEach(element => {
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');
        
        // REMOVED: div_row creation from inside the loop
        
        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');
        
        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');
        
        const title = document.createElement('h3');
        title.setAttribute('id', 'title');
        
        const center = document.createElement('center');
  
        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;
  
        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_column.appendChild(div_card);

        // ADD TO ROW: Put each column inside the single row
        div_row.appendChild(div_column);
    });

    // MOVE OUTSIDE: Add the full row to main after the loop finishes
    main.appendChild(div_row);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
      search.value = "";
  }
});