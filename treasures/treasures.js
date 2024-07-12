document.getElementById('toggle-button').addEventListener('click', function() {
    const set1 = document.getElementById('set1');
    const set2 = document.getElementById('set2');
    if (set1.style.display === 'none') {
        set1.style.display = 'block';
        set2.style.display = 'none';
    } else {
        set1.style.display = 'none';
        set2.style.display = 'block';
    }
});

// Function to gray out a photo slot
function grayOutPhoto(slot) {
    slot.style.filter = 'grayscale(100%)';
}

// Function to restore photo slot color
function restorePhoto(slot) {
    slot.style.filter = 'none';
}

// Add event listeners to photo slots for gray out effect
document.querySelectorAll('.photo-slot').forEach(slot => {
    slot.addEventListener('mouseover', () => grayOutPhoto(slot));
    slot.addEventListener('mouseout', () => restorePhoto(slot));
});

// Function to rename sets
function renameSet(setId, newName) {
    document.getElementById(setId + '-name').textContent = newName;
}

// Example of renaming sets (you can replace this with user input logic)
renameSet('set1', 'My First Photo Set');
renameSet('set2', 'My Second Photo Set');