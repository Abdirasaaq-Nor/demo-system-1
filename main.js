

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




const baro = document.querySelector('#baro')
baro.addEventListener('click', () => {
        // document.querySelector('#shapes').style.opacity = 0.5
    
        let x = document.querySelector('.sub_menu')
        x.style.opacity = 1.5
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
})
// document.addEventListener('DOMContentLoaded', ()=>{
//         document.querySelector('#baro').onclick = () =>{
//                 alert('ok')
//         }
// })