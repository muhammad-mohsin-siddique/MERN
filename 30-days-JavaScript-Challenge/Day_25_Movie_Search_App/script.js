const btn = document.querySelector('.search-button');
const more_info = document.querySelector('.view-additional-details');
const container = document.querySelector('.movie-info');

btn.addEventListener('click', (e) => {
    more_info.innerHTML = '';
    const input = document.querySelector('#movieName').value;
    url = `http://www.omdbapi.com/?apikey=40d5be1f&t=${input}`;
    fetch(url)
        .then((resolve) => {
            if (resolve.status === 200) {
                return resolve.json();
            } else return new Error('Movie Not Found');
        }).then((data) => {
            if (data.Title !== undefined || data.Title !== undefined || data.Poster !== undefined) {
                const element = `

                    <h2 class="movie-title">Title: ${data.Title}</h2>
                    <p class="movie-year">Year: ${data.Year}</p>
                    <button id='more-details'>More info</button>
                    <img src="${data.Poster}" alt="Movie Poster" class="movie-poster">
                
                `;
                container.innerHTML = element;
                const btnMoreDetails = document.querySelector('#more-details');
                btnMoreDetails.addEventListener('click', () => {
                    const element = `
                        <div class="movie-info" style='width: 100%'>
                            <p class="movie-year"><h3>Plot:</h3> ${data.Plot}</p>
                            <p class="movie-year"><h3>Actors:</h3> ${data.Actors}</p>
                            <p class="movie-year"><h3>Director:</h3> ${data.Director}</p>
                        </div>
                    `;
                    more_info.innerHTML = element;
                });

            } else {
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