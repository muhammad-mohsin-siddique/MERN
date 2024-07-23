
 // request URL
const form = document.querySelector('#getUsername');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const requestUrl = `https://api.github.com/users/${username}`;
    console.log(requestUrl);
    const xhr = new XMLHttpRequest(); // Creat an Object of XMLHttpRequest
    xhr.open('GET', requestUrl); // Request not send yet we have to use the send() method
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText); // convert string to JSON
            if(data.status !== '404'){
                const htmlContent = `
                <div class="profile-card">
                    <img src="${data.avatar_url}" alt="Profile Picture">
                    <div class="info">
                        <div class="name">${data.name}</div>
                        <div class="followers">Followers: ${data.followers}</div>
                    </div>
               </div>`;
                document.querySelector('#card-container').innerHTML = htmlContent;
            }else{
                alert('User Not Found');
                document.querySelector('#card-container').innerHTML = '';
            }
        }
    }
    xhr.send();

});

