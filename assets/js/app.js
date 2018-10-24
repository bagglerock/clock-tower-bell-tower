const calculateTolls = (sh, sm, eh, em) => {
  //initialize the ring number
  let rings = 0;
  //initialize the hours with an additional 12 to help with the math later
  //needs 12 more so that the rings that are added are not negative
  let startHOUR = parseInt(sh) + 12;
  let endHOUR = parseInt(eh) + 12;
  //if the times are exactly the same assume its a 24 hour period
  if (sh === eh && sm === em) {
    endHOUR += 24;
  }
  //if the start time is over the hour, then just increment the start hour
  if (sm > 0) {
    startHOUR++;
  }
  //if the end hour is less than the start hour, do some maths to fix it so it moves on to the next day
  if (endHOUR < startHOUR) {
    startHOUR -= 12;
    endHOUR += 12;
  }

  //loop through the hours and add the rings by the hour hand.  this is incremented by mod 12
  for (let i = startHOUR; i <= endHOUR; i++) {
    let tolls = i % 12;
    if (tolls === 0) {
      tolls += 12;
    }
    rings += tolls;
  }

  //return rings
  return rings;
};

const hour = document.getElementsByClassName("hour");
const min = document.getElementsByClassName("min");

// loop through the hour class and add an event listener for every key up
for (let i = 0; i < hour.length; i++) {
  hour[i].addEventListener("keyup", e => {
    // the result div
    const error = document.getElementById("error");
    // if the key press is 0-9 or a backspace
    if ((e.which >= 48 && e.which <= 57) || e.which === 8) {
      //if the value in the text box is not between 0 and 24
      if (e.target.value > 23 || e.target.value < 0) {
        //clear the box and show some error message
        e.target.value = "";
        error.innerHTML = "Please enter a number between 0 and 23";
        // if the value typed is looking sort of normal then clear the error
      } else {
        error.innerHTML = "";
      }
      // if the typed value is not a number then clear the value and show an error
    } else {
      e.target.value = "";
      error.innerHTML = "Numbers Only";
    }
  });
}

for (let i = 0; i < min.length; i++) {
  min[i].addEventListener("keyup", e => {
    // the result div
    const error = document.getElementById("error");
    // if the key press is 0-9 or a backspace
    if ((e.which >= 48 && e.which <= 57) || e.which === 8) {
      //if the value in the text box is not between 0 and 24
      if (e.target.value > 59 || e.target.value < 0) {
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
  });
}

//  This section is to move focus to the next element in the DOM so we dont have to tab over
const start = document.getElementsByClassName("start");
const end = document.getElementsByClassName("end");

// set an event listener to the class start
for (let i = 0; i < start.length; i++) {
  start[i].addEventListener("keyup", e => {
    // make sure that the length in the input is 2
    if (e.target.value.length === 2) {
      // make sure there is another element after
      if (i < start.length - 1) {
        // move the focus
        start[i + 1].focus();
      }
    }
  });
}

// see comments above
for (let i = 0; i < start.length; i++) {
  end[i].addEventListener("keyup", e => {
    if (e.target.value.length === 2) {
      if (i < end.length - 1) {
        end[i + 1].focus();
      }
    }
  });
}

// what happens when the button is clicked
document.getElementById("button").addEventListener("click", () => {
  let startHour = document.getElementById("start-hour");
  let startMin = document.getElementById("start-min");
  let endHour = document.getElementById("end-hour");
  let endMin = document.getElementById("end-min");

  //make sure all the fields are set
  if (startHour.value !== "" && startMin.value !== "" && endHour.value !== "" && endMin.value !== "") {
    const result = calculateTolls(startHour, startMin, endHour, endMin);
    const overview = `Start Time is ${startHour.value}:${startMin.value} and End Time is ${endHour.value}:${endMin.value}`;
    document.getElementById("reiteration").innerHTML = overview;
    document.getElementById(
      "result"
    ).innerHTML = `There will be ${result} rings.`;
    startHour.value = "";
    startMin.value = "";
    endHour.value = "";
    endMin.value = "";

    //show an error if the fields are not hit
  } else {
    document.getElementById("error").innerHTML =
      "all the fields are not filled";
  }
});
