document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const region = document.getElementById('region').value;
    const street = document.getElementById('street').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];
    
    // Create a new row in the table
    const table = document.getElementById('reportsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const dateCell = newRow.insertCell(0);
    const regionCell = newRow.insertCell(1);
    const streetCell = newRow.insertCell(2);
    const descriptionCell = newRow.insertCell(3);
    const imageCell = newRow.insertCell(4);
    
    dateCell.textContent = date;
    regionCell.textContent = region;
    streetCell.textContent = street;
    descriptionCell.textContent = description;
    
    if (image) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(image);
        img.style.width = '100px';
        imageCell.appendChild(img);
    } else {
        imageCell.textContent = 'No hay imagen';
    }
    
    // Clear the form
    document.getElementById('reportForm').reset();
});
