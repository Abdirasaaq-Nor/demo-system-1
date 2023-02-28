

const btn_2  = document.getElementById('btn_2')
const show_2 = document.getElementById('show_2')


show_2.style.display = "none"

btn_2.addEventListener('click', (event) => {
        if(show_2.style.display == "none"){
                show_2.style.display = "block"    
        }else{
                show_2.style.display = "none"
        }
})


