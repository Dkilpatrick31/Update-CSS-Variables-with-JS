const inputs = document.querySelectorAll('.controls input');

// this function logs the changes in the console made on the draggable input elements.
function handleUpdate() {
  console.log(this.value);
}

// this Event Listener looks for any changes made on the relevant input element
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// this Event Listener looks for any changes made on the relevant input element when the mouse moves.
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
