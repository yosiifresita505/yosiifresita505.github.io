document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Formulario enviado con éxito');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error al enviar el formulario');
    });
});


