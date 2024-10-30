document.addEventListener('DOMContentLoaded'), function() {
    // Add event listener to the search form
    document.getElementById('search-form').addEventListener('submit'), function(event) {
        event.preventDefault();
        // Get form values
        const cityOrSuburb = document.querySelector('input[placeholder="City or Suburb"]').value;
        const minPrice = document.querySelector('input[placeholder="Min Price"]').value;
        const maxPrice = document.querySelector('input[placeholder="Max Price"]').value;
        const propertyType = document.querySelector('select[required]').value;
        const bedrooms = document.querySelector('select[required]').value;
        const bathrooms = document.querySelector('select[required]').value;

        // Display the search criteria (for demonstration purposes)
        alert(`Searching for properties in ${cityOrSuburb} with a price range of ${minPrice} to ${maxPrice}, type: ${propertyType}, bedrooms: ${bedrooms}, bathrooms: ${bathrooms}`);
    }
}