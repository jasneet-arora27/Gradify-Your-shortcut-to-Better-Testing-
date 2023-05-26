function loader(){
    document.querySelector('.loader-container').classList.add('fade-in');
    document.querySelector('.all').classList.add('fade-gone');
    console.log("hello");
}

function loader2(){
    document.querySelector('.loader-container').classList.add('fade-gone');
    document.querySelector('.all').classList.remove('fade-gone');
    console.log("hello1");
}




function fadeOut(){
    setTimeout(loader,0);
   
    setTimeout(loader2, 5000);
}   

window.onload = fadeOut();