let star = document.getElementById('star');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let boot = document.getElementById('boot');
let river = document.getElementById('river');
let web = document.querySelector('.web');
window.onscroll =function(){
    let value = scrollY;
    star.style.left = value + 'px';
    moon.style.top = value *3 + 'px';
    
    boot.style.left = value + 'px';
    boot.style.top = value + 'px';
    mountains3.style.left = value + 'px';
    mountains4.style.right = value + 'px';
    mountains3.style.top = value + 'px';
    mountains4.style.top = value + 'px';
    river .style.top = value + 'px';
    web.style.fontSize = value + 'px';
    
    if (scrollY>=67){
        web.style.fontSize = 67+ 'px';
    }
    if(scrollY >= 127){
        document.querySelector('#main').style.background ='linear-gradient(#376281,#10001f)';
    }else{
         document.querySelector('#main').style.background ='linear-gradient(#200016 ,#10001f)';
    }
    
}