// script.js

document.addEventListener('DOMContentLoaded', () => {
    const photoSetContainer = document.getElementById('photo-set');
    const addSetButton = document.getElementById('add-set-button');
    const photoUploadInput = document.getElementById('photo-upload');
    const uploadForm = document.getElementById('upload-form');
    let photoUrls = [];

    // Function to create a photo slot
    function createPhotoSlot(url) {
        const slot = document.createElement('div');
        slot.className = 'photo-slot';
        const img = document.createElement('img');
        img.src = url;
        slot.appendChild(img);
        return slot;
    }

    // Function to create a new set of photos
    function createPhotoSet() {
        const newSet = document.createElement('div');
        newSet.className = 'photo-set';
        photoUrls.forEach(url => {
            newSet.appendChild(createPhotoSlot(url));
        });
        photoSetContainer.appendChild(newSet);
    }

    // Event listener for photo uploads
    document.getElementById('upload-button').addEventListener('click', () => {
        const files = photoUploadInput.files;
        if (files.length !== 13) {
            alert('Please upload exactly 13 photos.');
            return;
        }
        photoUrls = Array.from(files).map(file => URL.createObjectURL(file));
        createPhotoSet();
        uploadForm.style.display = 'none';
        addSetButton.style.display = 'block';
    });

    // Event listener for adding new photo sets
    addSetButton.addEventListener('click', () => {
        if (photoUrls.length !== 13) {
            alert('Please upload exactly 13 photos before adding new sets.');
            return;
        }
        createPhotoSet();
    });

    // Initially display the file upload form
    uploadForm.style.display = 'block';
});