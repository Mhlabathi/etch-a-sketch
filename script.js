const div = document.querySelector('.container');
const button = document.querySelector('#button');
let gridNum = 0;

button.addEventListener('click', function(){
    gridNum = Number.parseInt(prompt("Enter number of cells"));
    div.replaceChildren();
    createGrid(gridNum);
});

function changeDivColor(elem){
    elem.style.backgroundColor = 'green';
}

function createGrid(num){
    const toPixel = div.clientWidth;
    const pixel = Math.floor(toPixel / num);

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            let subDiv = document.createElement('div');
            subDiv.style.width = pixel + 'px';
            subDiv.style.height = pixel + 'px';
            div.appendChild( subDiv );

            subDiv.addEventListener('mouseover', function(){
                changeDivColor( subDiv );
            });
        }
    }
}