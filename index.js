function addToCart(cakeName) {
    alert(cakeName + " has been added to your cart!");
}

// Example form submission handling (basic)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted. We will contact you soon!');
});
