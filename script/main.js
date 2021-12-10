let header = document.getElementsByClassName('fixed__menu');

let scrollY = 0;

let show = true;

window.addEventListener('scroll',(e)=>{
    
    let sc = window.scrollY;


    // console.log(sc);

   

    if(sc == 0){
        show = false;
    }

    else if(sc > scrollY){
        show = false;
        
    }
    else if(sc < scrollY){
        show = true;
    }

    scrollY = sc;

    showHide(show);
})

function showHide(boll){
    header[0].style.display = boll == true? 'block':'none';
}