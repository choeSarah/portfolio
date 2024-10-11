window.addEventListener('DOMContentLoaded', () => {
    let therapistCard = document.getElementById("therapist_user");
    let clientCard = document.getElementById("client_user");

    currentIndex = 0; 
    clientCard.style.display = '';
    therapistCard.style.display = "none";

    zoomState = 0;
});

function showPersona(direction) {
    let therapistCard = document.getElementById("therapist_user");
    let clientCard = document.getElementById("client_user");

    let nextIndex = currentIndex + direction;

    console.log(nextIndex);


    if (nextIndex === 1) { // Moving to therapist
        clientCard.style.display = "none";
        therapistCard.style.display = '';
        currentIndex = nextIndex;
    } else { // Moving back to client
        console.log("made it here");
        clientCard.style.display = '';
        therapistCard.style.display = "none";
        currentIndex = 0; // Update the current index
    }
}

function zoom(stateChange) {
    let userFlow_img = document.getElementById("user_flow_img");
    console.log(zoomState + stateChange);

    if (zoomState + stateChange == 1){
        userFlow_img.style.transform = 'scale(1.3)';
        userFlow_img.style.zIndex = '10';
        userFlow_img.style.position = 'relative';
        userFlow_img.style.transition = 'ease-in-out 0.3s';
        zoomState = zoomState + stateChange;
    } else {
        userFlow_img.style.transform = 'scale(1)';
        userFlow_img.style.zIndex = '';
        zoomState = 0;
    }
}


/* .userflow img:hover {
    transform: scale(1.3); 
    z-index: 10; 
    position: relative; 
    transition: ease-in-out 0.3s;
} */