// document.querySelector('.c').onclick = () => {
//     classList.add('active');

// };
let mymedia = window.matchMedia('(max-width:600px)');

function firstclick(mymedia) {
    if (mymedia.matches) {
        window.open("www.google.com", "_self");

    } else {
        // function firstclick() {

        document.querySelector('.c').classList.add('active');
        // return scoundclick();
        // }
    }
}



function act1(event) {

    document.getElementById("mnuit1").parentElement.classList.remove('active')
    event.stopPropagation();
}

function continerfristscoundimage() {

    return scoundclick(mymedia);
}

function scoundclick(mymedia) {
    if (mymedia.matches) {
        window.open("www.google.com", "_self");

    } else {
        // function () {

        document.querySelector('.scound').classList.add('active');
        // }
    }
}


function act2(event) {

    document.getElementById("mnuit2").parentElement.classList.remove('active')
    event.stopPropagation();
}

function thirdclick(mymedia) {
    if (mymedia.matches) {
        window.open("www.google.com", "_self");

    } else {
        // function () {

        document.querySelector('.third').classList.add('active');
        // }
    }
}


function act3(event) {

    document.getElementById("mnuit3").parentElement.classList.remove('active')
    event.stopPropagation();
}

function forthclick(mymedia) {
    if (mymedia.matches) {
        window.open("www.google.com", "_self");

    } else {
        // function () {

        document.querySelector('.forth').classList.add('active');
        // }
    }
}


function act4(event) {

    document.getElementById("mnuit4").parentElement.classList.remove('active')
    event.stopPropagation();
}

function fifthclick(mymedia) {
    if (mymedia.matches) {
        window.open("www.google.com", "_self");

    } else {
        // function () {

        document.querySelector('.fifth').classList.add('active');
        // }
    }
}


function act5(event) {

    document.getElementById("mnuit5").parentElement.classList.remove('active')
    event.stopPropagation();
}
// let previewBox = document.querySelector('.c');

// function remfirstclick() {
//     var remfrsele = document.querySelector('.c');
//     remfrsele[0].classList.remove('active');

//     // console.log(remfrsele);
//     // remfrsele.classList.remove;
// }

// let preveiwContainer = document.querySelector('.service-continer');
// let previewBox = document.querySelectorAll('.c');
// previewBox.forEach(close => {
//     close.querySelector('.fa-times').onclick = () => {
//         close.classList.remove('active');
//         // preveiwContainer.classList.remove('active')
//     };
// });