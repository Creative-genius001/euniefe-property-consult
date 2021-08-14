const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav .nav-links");
const email = document.querySelector("#email_form");
const emailBtn = document.querySelector("#emailBtn");
 hamburger.addEventListener('click' , () =>{
      navLinks.classList.toggle('active');
     
 });

 const emailList = [];
 emailBtn.addEventListener('click', e=>{
     //  e.preventDefault();
     emailList.push(email.value);
     console.log(e);
 });
 $(document).ready(function(){
    $(".slick-slider").slick({

        // normal options...
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      
        // the magic
        responsive: [{
      
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              infinite: true
            }
      
          }, {
      
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              dots: true
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
      });
      
  });
  
 