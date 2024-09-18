const div = document.querySelector('.container');
const button = document.querySelector('#button');
let gridNum = 0;
const colors = ['blue', 'red', 'green', 'purple', 'yellow', 'grey'];

button.addEventListener('click', function(){
    gridNum = Number.parseInt(prompt("Enter number of cells"));
    div.replaceChildren();
    createGrid(gridNum);
});

function changeDivColor(elem){
    const rand = colors[Math.floor(Math.random() * colors.length)];
    elem.style.backgroundColor = rand;
}

function createGrid(num){
    const toPixel = div.clientWidth;
    const pixel = Math.floor(toPixel / num);

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            let subDiv = document.createElement('div');
            subDiv.style.width = pixel + 'px';
            subDiv.style.height = pixel + 'px';
            subDiv.className = 'square';
            div.appendChild( subDiv );

            subDiv.addEventListener('mouseover', function(){
                changeDivColor( subDiv );
            });
        }
    }
}