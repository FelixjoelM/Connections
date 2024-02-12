const firebaseConfig = {
    apiKey: "AIzaSyBARE75DoDRoYq8Lm-TZ-rlHB-xdJsDBXc",

    authDomain: "cont-18e84.firebaseapp.com",

    projectId: "cont-18e84",

    storageBucket: "cont-18e84.appspot.com",

    messagingSenderId: "527661229890",

    appId: "1:527661229890:web:c270424747933f0d574adb"

};

// Slide 1 Answer Script

let teamdata = document.getElementById('teamdata');
let user1in = document.getElementById('user1in');
let submitbtn1 = document.getElementById('submitbtn1');
let countex1 = 2;
submitbtn1.onclick = function () {
    let count1 = 2;
    count1 = count1 - 1;
    let chance = document.getElementById("status-1")
    chance.innerHTML = count1 + " is only available";
}

submitbtn1.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 1
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide1.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user1in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        countex1 = countex1 - 1;
        user1in.value = "";
        if (countex1 <= 0) {
            submitbtn1.style.backgroundColor = "#e63946";
            let disuser = document.getElementById("status-1")
            disuser.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn1.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn1.style.backgroundColor = "#ffc107";
        }
        // let count = 2;
        // if (count <= 0) {
        // }
    } catch (error) {
        console.log(error)
    }
})

// Slide 1 Answer Script Ends

// Slide 2 Answer Script Starts 
let user2in = document.getElementById('user2in')
let submitbtn2 = document.getElementById('submitbtn2')
let countex2 = 2;
submitbtn2.onclick = function () {
    let count2 = 2;
    count2 = count2 - 1;
    let chance2 = document.getElementById("status-2")
    chance2.innerHTML = count2 + " is only available";
}

submitbtn2.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 2
    console.log(formateddt)
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide2.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user2in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        countex2 = countex2 - 1
        if (countex2 <= 0) {
            submitbtn2.style.backgroundColor = "#e63946";
            let disuser2 = document.getElementById("status-2")
            disuser2.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn2.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn2.style.backgroundColor = "#ffc107";
        }
        console.log(count)
        user2in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 2 Answer Script Ends

// Slide 3 Answer Script 
let user3in = document.getElementById('user3in')
let submitbtn3 = document.getElementById('submitbtn3')

count = 2;

submitbtn3.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 2
    console.log(formateddt)
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide3.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user2in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        count = count - 1
        console.log(count)
        user3in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 3 Answer Script ends

// Slide 4 Answer Script 
let user4in = document.getElementById('user4in')
let submitbtn4 = document.getElementById('submitbtn4')

count = 2;

submitbtn4.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 2
    console.log(formateddt)
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide4.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user4in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        count = count - 1
        console.log(count)
        user4in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 4 Answer Script Ends

// Slide 5 Answer Script Starts
let user5in = document.getElementById('user5in')
let submitbtn5 = document.getElementById('submitbtn5')

count = 2;

submitbtn5.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 2
    console.log(formateddt)
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide5.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user5in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        count = count - 1
        console.log(count)
        user5in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 5 Answer Script Ends

// Slide 6 Answer Script Starts
let user6in = document.getElementById('user6in')
let submitbtn6 = document.getElementById('submitbtn6')

count = 2;

submitbtn6.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 2
    console.log(formateddt)
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide6.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user5in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        count = count - 1
        console.log(count)
        user6in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 6 Answer Script Starts 

// Slide 7 Answer Script Starts
let user7in = document.getElementById('user7in')
let submitbtn7 = document.getElementById('submitbtn7')

count = 2;

submitbtn7.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 2
    console.log(formateddt)
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide7.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user5in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        count = count - 1
        console.log(count)
        user7in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 7 Answer Script Ends

// Slide 8 Answer Script Starts
let user8in = document.getElementById('user8in')
let submitbtn8 = document.getElementById('submitbtn8')

count = 2;

submitbtn8.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 2
    console.log(formateddt)
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide8.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user5in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        count = count - 1
        console.log(count)
        user8in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 8 Answer Script Ends

// Slide 9 Answer Script Starts
let user9in = document.getElementById('user9in')
let submitbtn9 = document.getElementById('submitbtn9')

count = 2;

submitbtn9.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 2
    console.log(formateddt)
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide9.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user9in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        count = count - 1
        console.log(count)
        user9in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 9 Answer Script Ends

// Slide 10 Answer Scripts Starts
let user10in = document.getElementById('user10in')
let submitbtn10 = document.getElementById('submitbtn10')

count = 2;

submitbtn10.addEventListener('click', async () => {
    const currtime = Date.now()
    const date = new Date(currtime)
    const formateddt = date.toLocaleString();
    const info = 2
    console.log(formateddt)
    try {
        await fetch(
            "https://cont-18e84-default-rtdb.firebaseio.com/Slide10.json",
            {
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user10in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        count = count - 1
        console.log(count)
        user10in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 10 answer script ends
