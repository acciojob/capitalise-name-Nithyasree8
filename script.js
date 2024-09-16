//your JS code here. If required.
const inputField = document.getElementById('fname');
// Add an event listener to trigger when the input field loses focus (onblur ev
ent)
inputField.addEventListener('blur', function() {
 // Convert the input value to uppercase
 inputField.value = inputField.value.toUpperCase();
});
