// formulario

const opinionPost = document.getElementById('formulario-post');

opinionPost.addEventListener('submit', async () => {
    var data = new URLSearchParams(new FormData(opinionPost));

    fetch('http://localhost:3000/opiniones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data
    })
    .then(response => response.json()) 
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch ((error) => {
        console.error('Error del servidor:', error);
    })
});