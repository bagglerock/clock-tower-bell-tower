const hour = document.getElementsByClassName("hour");
const min = document.getElementsByClassName("min");

// loop through the hour class and add an event listener for every key up
for (let i = 0; i < hour.length; i++){
    hour[i].addEventListener("keyup", (e) => {
        // the result div
        const error = document.getElementById("error");
        // if the key press is 0-9 or a backspace
        if((e.which >= 48 && e.which <= 57)  || e.which === 8){
            //if the value in the text box is not between 0 and 24
            if(e.target.value > 24 || e.target.value < 0){
                //clear the box and show some error message
                e.target.value = "";
                error.innerHTML = "Please enter a number between 0 and 24";
            // if the value typed is looking sort of normal then clear the error
            } else {
                error.innerHTML = "";
            }
        // if the typed value is not a number then clear the value and show an error
        } else {
            e.target.value = "";
            error.innerHTML = "Numbers Only";
        }
    })
}

for (let i = 0; i < min.length; i++){
    min[i].addEventListener("keyup", (e) => {
        // the result div
        const error = document.getElementById("error");
        // if the key press is 0-9 or a backspace
        if((e.which >= 48 && e.which <= 57)  || e.which === 8){
            //if the value in the text box is not between 0 and 24
            if(e.target.value > 59 || e.target.value < 0){
                //clear the box and show some error message
                e.target.value = "";
                error.innerHTML = "Please enter a number between 0 and 59";
            // if the value typed is looking sort of normal then clear the error
            } else {
                error.innerHTML = "";
            }
        // if the typed value is not a number then clear the value and show an error
        } else {
            e.target.value = "";
            error.innerHTML = "Numbers Only";
        }
    })
}

const start = document.getElementsByClassName("start");
const end = document.getElementsByClassName("end");

for (let i = 0; i < start.length; i++){
    start[i].addEventListener("keyup", (e) => {
        if(e.target.value.length === 2){
            if (i < start.length -1){
                start[i+1].focus();
            }
        }
    })
}

for (let i = 0; i < start.length; i++){
    end[i].addEventListener("keyup", (e) => {
        if(e.target.value.length === 2){
            if (i < end.length -1){
                end[i+1].focus();
            }
        }
    })
}

document.getElementById("button").addEventListener("click", () => {
    const startHour = document.getElementById("start-hour").value;
    const startMin = document.getElementById("start-min").value;
    const endHour = document.getElementById("end-hour").value;
    const endMin = document.getElementById("end-min").value;

    if(startHour !== "" && startMin !== "" && endHour !== "" && endMin !== ""){
        const result = `Start Time is ${startHour}:${startMin} and End Time is ${endHour}:${endMin}`;
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("error").innerHTML = "all the fields are not filled";
    }
    
})
