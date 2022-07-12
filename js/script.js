//Dyqanet
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
})

// End Dyqanet

//Load More
let loadMore = document.querySelector('#load-more');
let currentItem = 5;

loadMore.onclick = () => {
    let boxes = [...document.querySelectorAll('.row .gjirafa-2 .col')];

    for(var i = currentItem; i < currentItem + 5; i++){
        boxes[i].style.display = "inline-block";
    }
    currentItem += 5;

    if(currentItem >= boxes.length) {
        loadMore.style.display = "none";
    }
}
//End Load More

//Arrow Icon

// let dropdown = document.querySelector('.dropdown')
// dropdown.onclick = function(){
//     dropdown.classList.toggle('active')
// }

