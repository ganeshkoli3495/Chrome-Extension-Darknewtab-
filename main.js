


// setInterval(() => {
//     function time(){
//         const d = new Date();
//         const hr = d.getHours()
//         const min = d.getMinutes();
    
//         const t = document.querySelector('.time');
//     t.innerHTML = 
//     `
//     <h1>${hr}:${min}</h1>
//     `
//     }  
//     time();
// }, 1000);



window.onload = function () {

    var username = localStorage.getItem("key");
   console.log(username)
    if(!username){
        username = prompt("Hey, what is your name !!!");
        localStorage.setItem("key", username);

    }
    let greet;
    const greetDate = new Date();
    const hour = greetDate.getHours();
    if(hour < 12){
         greet = "Good Morning";
    } else if(hour < 17) {
        greet = "Good Afternoon";
    } else {
        greet = "Good Night";
    }
    
    document.querySelector('.greetings').innerHTML = greet+ ", " + username;


    clock();

    function clock() {
        var now = new Date();
        var TwentyFourHour = now.getHours();
        var hour = now.getHours();
        var min = now.getMinutes();

        var mid = 'pm';
        if (min < 10) {
            min = "0" + min;
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (hour == 0) {
            hour = 12;
        }
        if (TwentyFourHour < 12) {
            mid = 'am';
        }
        document.querySelector('.time').innerHTML = hour + ':' + min;



        setTimeout(clock, 1000);

    }

    var date = new Date();
    var day = date.getDate();
    // var month = date.getMonth();
    var year = date.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    // document.querySelector('.datenumber').innerHTML = day + " " + monthNames[date.getMonth()] + " " + year;
    document.querySelector('.datenumber').innerHTML = day;
    document.querySelector('.month').innerHTML = monthNames[date.getMonth()];
}


    

    
