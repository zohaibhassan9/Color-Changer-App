const colorCode = document.getElementById('colorCode');
const changeColorCodeBtn = document.getElementById('changeColorBtn');



function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color  = '#';

for (let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random()*16)];
}
return color;
}


changeColorCodeBtn.addEventListener('click', ()=>{
const randomColor = getRandomColor();

document.body.style.backgroundColor = randomColor;
colorCode.textContent = randomColor;
})