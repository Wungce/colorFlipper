const colors = ['Red','Orange','Blue','Black','Gray','Tomato','Violet','Dodgerblue'];
document.getElementById('btn').addEventListener('click', function(){
    let color = document.querySelector('.color');
    let randomColor = randomSetColor();
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
})
function randomSetColor(){
    return Math.floor(Math.random() * colors.length)
}
