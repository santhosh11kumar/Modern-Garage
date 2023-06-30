

document.body.style.backgroundColor="#12100E";


//background image
let bg_color_btn = document.querySelector(".btn");


let color = [["#373785"],["#b98f57"],["#64642c"],["#ffa500"],["#8ad2df"],["#c75ec7"]];

let image = [["url('./Images/car/dark_blue.png')"],
             ["url('./Images/car/golden.png')"],
             ["url('./Images/car/ootgray.png')"],
             ["url('./Images/car/orange.png')"],
             ["url('./Images/car/blue.png')"],
             ["url('./Images/car/voilet.png')"]
]

let check_box_btn = document.querySelectorAll(".color-btn");
let image_container = document.querySelectorAll(".images_");

image_container[0].style.backgroundImage = image[0] ;

check_box_btn.forEach((checkbox,index)=>{

    checkbox.addEventListener("click",()=>{

        removebackground();

        document.body.style.backgroundColor=color[index];
        image_container[index].style.backgroundImage = image[index] ;
        image_container[index].classList.add("animated");
        bg_color_btn.style.backgroundColor = color[index];
    });
  
});


function removebackground(){
    document.body.style.backgroundColor="none";
    image_container.forEach((img,index)=>{
        img.style.backgroundImage = "" ;
        img.classList.remove("animated");

    });
    
};

