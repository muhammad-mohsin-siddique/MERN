const btn = document.querySelector('.search-button');
const container = document.querySelector('.movie-container');

btn.addEventListener('click', (e) => {
    const input = document.querySelector('#movieName').value;
    url = `http://www.omdbapi.com/?apikey=40d5be1f&t=${input}`;
    fetch(url)
        .then((resolve) => {
            if (resolve.status === 200) {
                return resolve.json();
            } else return new Error('Movie Not Found');
        }).then((data) => {
            if(data.Title !== undefined || data.Title !== undefined ||  data.Poster !== undefined){
                const element = `
                <img src="${data.Poster}" alt="Movie Poster" class="movie-poster">
                <div class="movie-info">
                    <h2 class="movie-title">${data.Title}</h2>
                    <p class="movie-year">Year: ${data.Year}</p>
                </div>
            `;
            container.innerHTML = element;
            }else{
                const element = `
                <div class="movie-info">
                    <h2 class="movie-title">Movie Not Found: Check you have entered correct Title</h2>
                </div>
            `;
            container.innerHTML = element;
            }

        }).catch((error) => {
            console.error(error.message);
        });

});


