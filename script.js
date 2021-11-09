const btn = document.querySelector('#btn')



btn.addEventListener('click', ()=>{
    let RGB_R = Math.ceil(Math.random()*255)
    let RGB_G = Math.ceil(Math.random()*255)
    let RGB_B = Math.ceil(Math.random()*255)
    console.log(RGB_R, RGB_G, RGB_B);
    let color = `(${RGB_R}, ${RGB_G}, ${RGB_B})`
    console.log(color)

    document.querySelector('#text-RGB').textContent = `RGB${color}`

    document.querySelector('body').style.backgroundColor = `rgb${color}`

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
