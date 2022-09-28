const tableau = document.querySelector('.tableau');
const buttons = document.querySelector('#btn');
const btn8 = document.querySelector('.btn8');
const btn16 = document.querySelector('.btn16');
const btn32 = document.querySelector('.btn32');
const clear = document.querySelector('#clear');
const color = document.querySelector('#color');
const erase = document.querySelector('#erase');
//Je dois essayer de creer une fonction qui prends 2 paramètres. Un paramètre qui s'occupe du nombre de blocks
//à creer et l'autre qui s'occupe de la taille des blocks. 
//Mission Accomplie
//32(1024, 8); 16(256, 16); 8(64, 32)

const redRgb = Math.floor(Math.random() * 255);
const greenRgb = Math.floor(Math.random() * 128);
const blueRgb = Math.floor(Math.random() * 255);
//Je dois creer une nouvelle fonction ou peut etre une juste quelque chose sur CSS, afin de pouvoir creer une
//palette de couleurs qui me permettra de colorier le tableau.

function createBlock(divNum, divSize) { 
    for(let i = 1; i <= divNum; i++){
        const divItem = document.createElement('div');
        divItem.classList.add('divItem');
        tableau.appendChild(divItem);

        const size = Math.ceil(1) * divSize + "px";
        divItem.style.width = size ;
        divItem.style.height = size;
        divItem.style.background = "white";

        divItem.addEventListener('mouseover', (e) => {
            divItem.style.background = `rgb(${redRgb}, ${greenRgb}, ${blueRgb})`;
        });

        clear.addEventListener('click', () => {
            divItem.remove();
        })

    };
};

function colorPicker() {
    color.addEventListener('click', () => {
        
    })
};

colorPicker();


//Creer un bouton 'palettes de couleurs' et activer la fonction clear avant tous les boutons.


btn8.addEventListener('click', (e) => {
        createBlock(64, 32);
})

btn16.addEventListener('click', (e) => {
        createBlock(256, 16);
})

btn32.addEventListener('click', (e) => {
        createBlock(1024, 8);
})

