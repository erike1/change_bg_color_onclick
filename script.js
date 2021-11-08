const btn = document.querySelector('#btn')



btn.addEventListener('click', ()=>{
    let RGB_R = Math.ceil(Math.random()*255)
    let RGB_G = Math.ceil(Math.random()*255)
    let RGB_B = Math.ceil(Math.random()*255)
    console.log(RGB_R, RGB_G, RGB_B);
    let color = `rgb(${RGB_R}, ${RGB_G}, ${RGB_B})`
    console.log(color)

    document.querySelector('#RGB_R').textContent = RGB_R
    document.querySelector('#RGB_G').textContent = RGB_G
    document.querySelector('#RGB_B').textContent = RGB_B
    document.querySelector('#text-RGB').textContent = color

    // document.querySelector('body').style.backgroundColor = 'rgb(25, 171, 245)'
    document.querySelector('body').style.backgroundColor = color

    let contrast = 90
    if(RGB_R < contrast || RGB_G < contrast || RGB_B < contrast) {
        let text_array = document.querySelectorAll('.text')
        for(item of text_array){
            item.style.color = 'white'
        } 
    } else {
        let text_array = document.querySelectorAll('.text')
        for(item of text_array){
            item.style.color = 'black'
        }
    }
})
