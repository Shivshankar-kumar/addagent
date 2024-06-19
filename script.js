document.getElementById('openFormBtn').onclick = function() {
    document.getElementById('formPopup').style.display = 'block';
}

document.querySelector('.close-btn').onclick = function() {
    document.getElementById('formPopup').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('formPopup')) {
        document.getElementById('formPopup').style.display = 'none';
    }
}

// javascript on image

function validateImage(event) {
    var file = event.target.files[0];
    var errorMessage = document.getElementById('errorMessage');
    var imagePreview = document.getElementById('imagePreview');
    
    // Reset previous error messages and image preview
    errorMessage.style.display = 'none';
    imagePreview.style.display = 'none';
    
    // Validate file type
    var validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
        errorMessage.style.display = 'block';
        return;
    }
    
    // Validate file size
    if (file.size > 200000) { // 200KB
        errorMessage.style.display = 'block';
        return;
    }
    
    // Display image preview
    var reader = new FileReader();
    reader.onload = function() {
        imagePreview.src = reader.result;
        imagePreview.style.display = 'block';
    }
    reader.readAsDataURL(file);
}

