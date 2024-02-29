document.addEventListener('DOMContentLoaded', function(){
    var windowHeight = window.innerHeight;
    var pageHeight = document.body.clientHeight;

    if (pageHeight > windowHeight){
        window.addEventListener('scroll', function(){
            var scrollPosition = window.scrollY;
            var textPosition = document.querySelector('.endpage').getBoundingClientRect().top;

            if(textPosition < windowHeight / 2){
                document.querySelector('.endpage').classList.add('show-text');
            }
        });
    } else{
        document.querySelector('.endpage').classList.add('show-text');
    }
})

// window.addEventListener('scroll', function(){
//     var scrollPosition = window.scrollY;
  
//     var textPosition = document.querySelector('.endpage').getBoundingClientRect().top;

//     if (textPosition <= window.innerHeight / 2){
//       document.querySelector('.endpage').classList.add('show-text');
//     }
//   })