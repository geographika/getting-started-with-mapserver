// Get the input element and grid container
const searchInput = document.getElementById('searchInput');
const gridContainer = document.getElementById('gridContainer');

// Add event listener for input changes
searchInput.addEventListener('input', filterItems);

function filterItems() {
    // Get the search query
    const searchQuery = searchInput.value.toLowerCase();

    // Get all grid items
    const gridItems = gridContainer.getElementsByClassName('grid-item');

    // Loop through each grid item and hide/show based on search query
    for (const item of gridItems) {
        const title = item.querySelector('.title').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}
