const next = document.getElementById('next');
const prev = document.getElementById('prev');
const p = document.getElementById('name');
const img = document.querySelector('img');

let images = [ 
  {
    p: "1.jpeg"
  },
  {
    p: "2.jpeg"
  },
  {
    p: "3.jpeg"
  },
  {
    p: "4.jpeg"
  },
  {
    p: "5.jpeg"
  },
  {
    p: "6.jpeg"
  },
];

const loadimages = (images) => {
    p.innerHTML = images.p;  // to change the p tag under the image.
    img.src = "images/" + images.p ; // to take image from the image folder with thier default names.
};

imagesIndex = 0;

next.addEventListener('click', () =>{
        imagesIndex = (imagesIndex + 1);  // (0 + 1) % 6 = 1
         
        if (imagesIndex == images.length -1){
          imagesIndex = 0;
        }
        loadimages(images[imagesIndex]);
});

prev.addEventListener('click', () =>{
     imagesIndex = (imagesIndex - 1)  // (0 - 1 + 6) % 6 = 5
      
     if (imagesIndex == 0){
       imagesIndex = images.length - 1;
     }
     loadimages(images[imagesIndex]);
});