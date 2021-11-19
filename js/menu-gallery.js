// Define variables
// Types of photos
const photosNail = document.getElementsByClassName("photo-type__nails");
const photosLash = document.getElementsByClassName("photo-type__lash");
const photosSemiPermanant = document.getElementsByClassName("photo-type__semi-permanant");
const photosMTS = document.getElementsByClassName("photo-type__mts");
const arrayOfPhotos = [photosNail, photosLash, photosMTS, photosSemiPermanant];
// Buttons
const buttonAll = document.getElementById("gallery-button__all");
const buttonNails = document.getElementById("gallery-button__nails");
const buttonLash = document.getElementById("gallery-button__lash");
const buttonSemiPermanant = document.getElementById("gallery-button__semi-permanant");
const buttonMTS = document.getElementById("gallery-button__mts");

// console.log(photosNail)
// console.log(photosLash)
// console.log(photosSemiPermanant)
// console.log(photosMTS)
console.log(buttonAll);
console.log(buttonNails);
console.log(buttonLash);
console.log(buttonSemiPermanant);
console.log(buttonMTS);

// console.log(Array.from(photosNail).foreach((item) => console.log("hi")));

// Define a function to toggle CSS display property of the elements above
function showThesePhotos(photoType, showAll) {
    // If showAll = true, show all photos, otherwise, show the given types of photo
    if (showAll) {
        arrayOfPhotos.forEach((photos) => {
            Array.prototype.forEach.call(photos, function (eachPhoto) {
                eachPhoto.style.display = "flex";
            });
        });
    } else {
        arrayOfPhotos.forEach((photos) => {
            Array.prototype.forEach.call(photos, function (eachPhoto) {
                eachPhoto.style.display = "none";
            });
        });
        Array.prototype.forEach.call(photoType, function (eachPhoto) {
            eachPhoto.style.display = "flex";
        });
    }
}

// Assign functions to buttons
buttonAll.addEventListener("click", () => showThesePhotos(null, true));
buttonNails.addEventListener("click", () => showThesePhotos(photosNail, false));
buttonLash.addEventListener("click", () => showThesePhotos(photosLash, false));
buttonSemiPermanant.addEventListener("click", () => showThesePhotos(photosSemiPermanant, false));
buttonMTS.addEventListener("click", () => showThesePhotos(photosMTS, false));
