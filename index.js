const button = document.getElementById('submit');
const heading = document.getElementById('top-header');

const colors = [
        'yellow',
        'green',
        'blue',
        'red',
        'purple',
        'orange',
        'brown',
        'black',
        'white',
      ];

function onSubmitButtonClick() {
        heading.style.color = 
        colors[Math.floor(Math.random() * Math.floor(colors.length - 1))];
}

button.addEventListener('click', onSubmitButtonClick)