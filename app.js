'use strict'
let allProducts = [];
let arr1 = [];
let arr2 = [];
let arr3 = [];
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let results = document.getElementById('results')
let totalClicks = 0;

// constructor function for products 
function product(name, pathOfImage) {
    this.name = name;
    this.pathOfImage = pathOfImage;
    this.timesShown = 0;
    this.timesClicked = 0;
    allProducts.push(this);

}

new product('bag', 'assets/bag.jpg');
new product('banana', 'assets/banana.jpg');
new product('bathroom', 'assets/bathroom.jpg');
new product('boots', 'assets/boots.jpg');
new product('breakfast', 'assets/breakfast.jpg');
new product('bubblegum', 'assets/bubblegum.jpg');
new product('chair', 'assets/chair.jpg');
new product('cthulhu', 'assets/cthulhu.jpg');
new product('dog-duck', 'assets/dog-duck.jpg');
new product('dragon', 'assets/dragon.jpg');
new product('pen', 'assets/pen.jpg');
new product('pet-sweep', 'assets/pet-sweep.jpg');
new product('scissors', 'assets/scissors.jpg');
new product('shark', 'assets/shark.jpg');
new product('sweep', 'assets/sweep.png');
new product('tauntaun', 'assets/tauntaun.jpg');
new product('unicorn', 'assets/unicorn.jpg');
new product('usb', 'assets/usb.gif');
new product('water-can', 'assets/water-can.jpg');
new product('wine-glass', 'assets/wine-glass.jpg');

console.log[allProducts];

arr1.push(bag, banana, bathroom, boots, breakfast, bubblegum);
arr2.push(chair, cthulhu, dog_duck, dragon, pen, pet_sweep, scissors);
arr3.push(shark, sweep, tauntaun, unicorn, usb, water_can, wine_glass);

function generateRandomIndex(image) {

    let randomIndex = Math.floor(Math.random() * image.length);
    return image[randomIndex];
}



let imgOne;
let imgTwo;
let imgThree;

function renderThreeRandomImages() {
    imgOne = generateRandomIndex(arr1);
    one.setAttribute('src', imgOne.pathOfImage);
    one.setAttribute('alt', imgOne.name);
    imgOne.timesShown++;

    imgTwo = generateRandomIndex(arr2);
    two.setAttribute('src', imgTwo.pathOfImage);
    two.setAttribute('alt', imgTwo.name);
    imgTwo.timesShown++;

    imgThree = generateRandomIndex(arr3);
    three.setAttribute('src', imgThree.pathOfImage);
    three.setAttribute('alt', imgThree.name);
    imgThree.timesShown++;


}


// function comparison(){
//     while (imgOne === imgTwo){

//         imgOne = generateRandomIndex(arr1);
//     }

//     while (imgThree === imgTwo || imgThree === imgOne){
//         imgThree = generateRandomIndex(arr3)
//     }
// }




function handleImageClick(event) {
    event.preventDefault();
    let id = event.target.getAttribute('alt');

    if (totalClicks < 25) {
        totalClicks++;
        for (let i = 0; i < arr1.length; i++) {
            if (id === arr1[i].name) {
                arr1[i].timesClicked++;
            }
        }
        for (let j = 0; j < arr2.length; j++) {
            if (id === arr2[j].name) {
                arr2[j].timesClicked++;
            }
        }
        for (var k = 0; k < arr3.length; k++) {
            if (id === arr3[k].name) {
                arr3[k].timesClicked++;
            }
        }


        renderThreeRandomImages();

    } else {
        one.removeEventListener('click', handleImageClick);
        two.removeEventListener('click', handleImageClick);
        three.removeEventListener('click', handleImageClick);
        listing();


    }


}


one.addEventListener('click', handleImageClick);
two.addEventListener('click', handleImageClick);
three.addEventListener('click', handleImageClick);
renderThreeRandomImages();


function listing() {
    for (let i = 0; i < allProducts.length; i++) {
        let list = document.createElement('li');
        results.appendChild(list);
        list.textContent = (allProducts[i].name + ' had ' + allProducts[i].timesClicked + ' clicks and shown ' + allProducts[i].timesShown + ' times.');

    }
}


