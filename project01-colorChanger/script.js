const buttons=Array.from(document.getElementsByClassName("button"));
console.log(buttons);

buttons.forEach(button =>{
    button.addEventListener('click',changeBackground)
})

function changeBackground(e){
    let target=e.target
    const body=document.getElementsByTagName("body")[0]
    body.style.backgroundColor=target.id   
}