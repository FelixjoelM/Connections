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
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user1in.value, "Time": formateddt, "Slide Number": info,"Input Time" : countex1 },),
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
let countex3 = 2;
submitbtn3.onclick = function () {
    let count3 = 2;
    count3 = count3 - 1;
    let chance3 = document.getElementById("status-3")
    chance3.innerHTML = count3 + " is only available";
}

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
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user3in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        countex3 = countex3 - 1
        if (countex3 <= 0) {
            submitbtn3.style.backgroundColor = "#e63946";
            let disuser3 = document.getElementById("status-3")
            disuser3.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn3.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn3.style.backgroundColor = "#ffc107";
        }
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
let countex4 = 2;
submitbtn4.onclick = function () {
    let count4 = 2;
    count4 = count4 - 1;
    let chance4 = document.getElementById("status-4")
    chance4.innerHTML = count4 + " is only available";
}

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
        countex4 = countex4 - 1
        if (countex4 <= 0) {
            submitbtn4.style.backgroundColor = "#e63946";
            let disuser4 = document.getElementById("status-4")
            disuser4.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn4.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn4.style.backgroundColor = "#ffc107";
        }
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
let countex5 = 2;
submitbtn5.onclick = function () {
    let count5 = 2;
    count5 = count5 - 1;
    let chance5 = document.getElementById("status-5")
    chance5.innerHTML = count5 + " is only available";
}

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
        countex5 = countex5 - 1
        if (countex5 <= 0) {
            submitbtn5.style.backgroundColor = "#e63946";
            let disuser5 = document.getElementById("status-5")
            disuser5.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn5.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn5.style.backgroundColor = "#ffc107";
        }
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
let countex6 = 2;
submitbtn6.onclick = function () {
    let count6 = 2;
    count6 = count6 - 1;
    let chance6 = document.getElementById("status-6")
    chance6.innerHTML = count6 + " is only available";
}

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
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user6in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        countex6 = countex6 - 1
        if (countex6 <= 0) {
            submitbtn6.style.backgroundColor = "#e63946";
            let disuser6 = document.getElementById("status-6")
            disuser6.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn6.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn6.style.backgroundColor = "#ffc107";
        }
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
let countex7 = 2;
submitbtn7.onclick = function () {
    let count7 = 2;
    count7 = count7 - 1;
    let chance7 = document.getElementById("status-7")
    chance7.innerHTML = count7 + " is only available";
}

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
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user7in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        countex7 = countex7 - 1
        if (countex7 <= 0) {
            submitbtn7.style.backgroundColor = "#e63946";
            let disuser7 = document.getElementById("status-7")
            disuser7.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn7.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn7.style.backgroundColor = "#ffc107";
        }
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
let countex8 = 2;
submitbtn8.onclick = function () {
    let count8 = 2;
    count8 = count8 - 1;
    let chance8 = document.getElementById("status-8")
    chance8.innerHTML = count8 + " is only available";
}

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
                body: JSON.stringify({ "Team Data": teamdata.value, "Answer": user8in.value, "Time": formateddt, "Slide Number": info },),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        countex8 = countex8 - 1
        if (countex8 <= 0) {
            submitbtn8.style.backgroundColor = "#e63946";
            let disuser8 = document.getElementById("status-8")
            disuser8.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn8.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn8.style.backgroundColor = "#ffc107";
        }
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
let countex9 = 2;
submitbtn9.onclick = function () {
    let count9 = 2;
    count9 = count9 - 1;
    let chance9 = document.getElementById("status-9")
    chance9.innerHTML = count9 + " is only available";
}


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
        countex9 = countex9 - 1
        if (countex9 <= 0) {
            submitbtn9.style.backgroundColor = "#e63946";
            let disuser9 = document.getElementById("status-9")
            disuser9.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn9.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn9.style.backgroundColor = "#ffc107";
        }
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
let countex10 = 2;
submitbtn10.onclick = function () {
    let count10 = 2;
    count10 = count10 - 1;
    let chance10 = document.getElementById("status-10")
    chance10.innerHTML = count10 + " is only available";
}


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
        countex10 = countex10 - 1
        if (countex10 <= 0) {
            submitbtn10.style.backgroundColor = "#e63946";
            let disuser10 = document.getElementById("status-10")
            disuser10.innerHTML = "You Doesn't have Sufficient Chance";
            submitbtn10.disabled = true
            // alert("Your chance is over")
        }
        else {
            submitbtn10.style.backgroundColor = "#ffc107";
        }
        console.log(count)
        user10in.value = ""
    } catch (error) {
        console.log(error)
    }
})
// Slide 10 answer script ends
