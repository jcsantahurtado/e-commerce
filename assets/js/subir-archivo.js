//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
    inputContainer = document.querySelector(".input-container"),
    dragText = dropArea.querySelector("header"),
    button = inputContainer.querySelector("a"),
    span = inputContainer.querySelector("span"),
    input = dropArea.querySelector("input");
let file;  //this is a global variable and we'll use it inside multiple functions

button.onclick = () => {
    input.click();  //if user click on the button then the input also clicked
}

input.addEventListener("change", function () {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    dropArea.classList.add("active");
    showFile();  //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();  //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
    event.preventDefault();  //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    showFile();  //calling function
});

function showFile() {
    let fileType = file.type;  //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/svg+xml"];  //adding some valid image extensions in array
    if (validExtensions.includes(fileType)) {  //if user selected file is an image file
        let fileReader = new FileReader();  //creating new FileReader object
        fileReader.onload = () => {
            let fileURL = fileReader.result;  //passing user file source in fileURL variable
            crearImgTag(fileURL);
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("This is not an Image File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}


function crearImgTag(fileURL) {
    let imgTag = `
        <img src="${fileURL}" alt="" id="recent-image">
        <i class="fa-solid fa-xmark"></i>
        `;  //creating an img tag and passing user selected file source inside src attribute

    dropArea.innerHTML = imgTag;  //adding that created img tag inside dropArea container
    dropArea.classList.add("active");
    button.style.display = "none";
    span.style.display = "none";
}

function reetablecerArea() {
    dropArea.querySelector('img').style.display = 'none';
    dropArea.querySelector('i').style.display = 'none';
    dropArea.classList.remove("active");
    button.style.display = "block";
}