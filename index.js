const tableau = document.querySelector('.tableau');
const buttonsContainer = document.querySelector('.button');
const btn8 = document.querySelector('#btn8');
const btn16 = document.querySelector('#btn16');
const btn32 = document.querySelector('#btn32');
const clear = document.querySelector('#clear');
const color = document.querySelector('#color');
const erase = document.querySelector('#erase');
const colorPicker = document.querySelector('input');
//Je dois essayer de creer une fonction qui prends 2 paramètres. Un paramètre qui s'occupe du nombre de blocks
//à creer et l'autre qui s'occupe de la taille des blocks. 
//Mission Accomplie
//32(1024, 8); 16(256, 16); 8(64, 32)

document.body.onload = createBlock(64, 32);

const redRgb = Math.floor(Math.random() * 255);
const greenRgb = Math.floor(Math.random() * 128);
const blueRgb = Math.floor(Math.random() * 255);
//Je dois creer une nouvelle fonction ou peut etre une juste quelque chose sur CSS, afin de pouvoir creer une
//palette de couleurs qui me permettra de colorier le tableau.


function createBlock(divNum, divSize) { 
    for(let i = 1; i <= divNum; i++){
        let divItem = document.createElement('div');
        divItem.classList.add('divItem');
        tableau.appendChild(divItem);

        const size = Math.ceil(1) * divSize + "px";
        divItem.style.width = size ;
        divItem.style.height = size;
        divItem.style.background = "white";

        divItem.addEventListener('mouseover', () => {
            divItem.style.background = changeColor(divItem);
        })
            
        
            clear.addEventListener('click', () => {
            divItem.remove();
        })
        
    };
};


function changeColor(e) {
    let color = colorPicker.value;
    e.style.backgroundColor = color;
}

//Creer un bouton 'palettes de couleurs' et activer la fonction clear avant tous les boutons.


function pickPixels() {
    buttonsContainer.addEventListener('click', (e) => {
        if(e.target.id == "btn8") {
            createBlock(64, 32);
        } else if(e.target.id == "btn16") {
            createBlock(256, 16);
        } else if(e.target.id == "btn32"){
            createBlock(1024, 8);
        }
    })
}
pickPixels();
