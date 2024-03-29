const divBoard = document.querySelector('.board');
const btnSquares = document.querySelector('#nbSquares');
const btnReset = document.querySelector('#reset');
const btnPsycho =document.querySelector('#psycho');
const btnGreys = document.querySelector('#greys');
const btnBasic = document.querySelector('#basic');

function createBoard(side=16) {

    for(let i=0; i<side;i++) {
    let divRow = document.createElement('div');
    divRow.classList.add('row');
    for(let j=0; j<side;j++) {
        let divColumn = document.createElement('div');
        divColumn.classList.add('square');
        divRow.appendChild(divColumn);
    }
    divBoard.appendChild(divRow);
    }
}

function chooseSize() {
    let sizeChosen = prompt('Please enter the number of squares per row and column');
    return sizeChosen

}

function deleteBoard() {
    let nbElements = divBoard.children.length;
    for (let i=0; i<nbElements; i++){
        divBoard.removeChild(divBoard.firstChild);
    }
}




function addBlack() {
    const divSquares = document.querySelectorAll('.square');
    divSquares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('active');
        });
    });
}

function psycho() {    
    
    const divSquares = document.querySelectorAll('.square');
    divSquares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
    });

}

function greys() {
    const divSquares = document.querySelectorAll('.square');
    divSquares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            if (square.classList.contains('grey4')){
                square.classList.add('grey5');
            }
            else if(square.classList.contains('grey3')){
                square.classList.add('grey4');
            }
            
            else if(square.classList.contains('grey2')){
                square.classList.add('grey3');
            }

            else if(square.classList.contains('grey1')){
                square.classList.add('grey2');
            }

            else {
                square.classList.add('grey1');
            }       
            
            
        });
    });
}



function reset() {
    const divSquares = document.querySelectorAll('.square');
    divSquares.forEach((square) => {
        square.classList.remove('active');
        square.style.backgroundColor = 'white';
    });
}

createBoard();
addBlack();

btnSquares.addEventListener('click', () => {
    deleteBoard();
    createBoard(chooseSize());
})

btnReset.addEventListener('click', () => {
    reset();
})

btnPsycho.addEventListener('click', () => {
    deleteBoard();
    createBoard(chooseSize());
    psycho();
})

btnGreys.addEventListener('click', () => {
    deleteBoard();
    createBoard(chooseSize());
    greys();
})

btnBasic.addEventListener('click', () => {
    deleteBoard();
    createBoard(chooseSize());
    addBlack();
})