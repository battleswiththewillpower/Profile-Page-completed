console.log('Ashley for the WIN$$$$$$$$');

// let newName = document.querySelector("#user-name");
// let increaseByOne = document.querySelector("five-hun");
// let decreaseByEle = document.querySelector('.button-and-con');
// // console.log(name);

function change() {
   //change #user-name 
    // newName.innerText = "Abundance Prosperity";
    let txt = "Abundance Prosperity";
    document.getElementById("user-name").innerHTML = txt;
    // console.log(txt);
    // console.log(document.getElementById("user-name").innerHTML);
    // //chnage the user-name

}

// function remove() {
//     const removedUser = document.querySelector(".tod");
//     removedUser.remove();
// }

//use id to find the element i want to hide
function removeUsers (id) {
    let removedUser = document.querySelector(id);
    // console.log(removedUser);
    removedUser.remove();

        decreaseByEle.innerText-=1;

}

function increaseYourConnection(id){
    //access the class using .fiv-hun
    //increase 500 by 1
    // console.log('this button works');
    // count+=1 or count++
    let increaseByOne = document.querySelector(id);
    increaseByOne.innerText++;
}

// function decres

