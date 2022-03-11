function showDate(){
    var date = new Date();
    var h = date.getHours();
    var years = date.getFullYear();
    var mm = date.getMinutes();
    var m = date.getMonth();
    var days = date.getDate();
    var day = date.getDay();
    var s = date.getSeconds();
    var endofDay;
    var session = "AM";

    if(m == 0){m = "January"};
    if(m == 1){m = "February"};
    if(m == 2){m = "March"};
    if(m == 3){m = "April"};
    if(m == 4){m = "May"};
    if(m == 5){m = "June"};
    if(m == 6){m = "July"};
    if(m == 7){m = "August"};
    if(m == 8){m = "September"};
    if(m == 9){m = "October"};
    if(m == 10){m = "November"};
    if(m == 11){m = "December"};

    if(day == 0){day = "Sunday"};
    if(day == 1){day = "Monday"};
    if(day == 2){day = "Tuesday"};
    if(day == 3){day = "Wednesday"};
    if(day == 4){day = "Thursday"};
    if(day == 5){day = "Friday"};
    if(day == 6){day = "Saturday"};

    if(days == 1){endofDay = "st"};
    if(days == 2){endofDay = "nd"};
    if(days == 3){endofDay = "rd"};
    if(days == 21){endofDay = "st"};
    if(days == 22){endofDay = "nd"};
    if(days == 23){endofDay = "rd"};
    if(days == 31){endofDay = "st"};
    if(days > 3 || days <21 || days > 23)(endofDay = "th");
    days += endofDay;

    console.log(mm);

    if(s == 1){
        document.getElementById("body").style.backgroundColor = "rgb(153, 20, 20)";
        console.log("red");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/1.png'>";
    };
    if(s == 2){
        document.getElementById("body").style.backgroundColor = "rgb(206, 124, 17)";
        console.log("orange");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/2.png'>";
    };
    if(s == 3){
        document.getElementById("body").style.backgroundColor = "rgb(241, 238, 42)";
        console.log("yellow");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/3.png'>";
    };
    if(s == 4){
        document.getElementById("body").style.backgroundColor = "rgb(49, 241, 42)";
        console.log("lgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/4.png'>";
    };
    if(s == 5){
        document.getElementById("body").style.backgroundColor = "rgb(17, 100, 14)";
        console.log("dgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/5.png'>";
    };
    if(s == 6){
        document.getElementById("body").style.backgroundColor = "rgb(79, 125, 192)";
        console.log("lblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/6.png'>";
    };
    if(s == 7){
        document.getElementById("body").style.backgroundColor = "rgb(27, 6, 122)";
        console.log("dblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/7.png'>";
    };
    if(s == 8){
        document.getElementById("body").style.backgroundColor = "rgb(91, 25, 167)";
        console.log("purple");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/8.png'>";
    };
    if(s == 9){
        document.getElementById("body").style.backgroundColor = "rgb(201, 52, 188)";
        console.log("pink");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/9.png'>";
    };
    if(s == 10){
        document.getElementById("body").style.backgroundColor = "rgb(255, 255, 255)";
        console.log("white");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/10.png'>";
    };
    if(s == 11){
        document.getElementById("body").style.backgroundColor = "rgb(153, 20, 20)";
        console.log("red");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/11.png'>";
    };
    if(s == 12){
        document.getElementById("body").style.backgroundColor = "rgb(206, 124, 17)";
        console.log("orange");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/12.png'>";
    };
    if(s == 13){
        document.getElementById("body").style.backgroundColor = "rgb(241, 238, 42)";
        console.log("yellow");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/1.png'>";
    };
    if(s == 14){
        document.getElementById("body").style.backgroundColor = "rgb(49, 241, 42)";
        console.log("lgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/2.png'>";
    };
    if(s == 15){
        document.getElementById("body").style.backgroundColor = "rgb(17, 100, 14)";
        console.log("dgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/3.png'>";
    };
    if(s == 16){
        document.getElementById("body").style.backgroundColor = "rgb(79, 125, 192)";
        console.log("lblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/4.png'>";
    };
    if(s == 17){
        document.getElementById("body").style.backgroundColor = "rgb(27, 6, 122)";
        console.log("dblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/5.png'>";
    };
    if(s == 18){
        document.getElementById("body").style.backgroundColor = "rgb(91, 25, 167)";
        console.log("purple");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/6.png'>";
    };
    if(s == 19){
        document.getElementById("body").style.backgroundColor = "rgb(201, 52, 188)";
        console.log("pink");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/7.png'>";
    };
    if(s == 20){
        document.getElementById("body").style.backgroundColor = "rgb(255, 255, 255)";
        console.log("white");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/8.png'>";
    };
    if(s == 21){
        document.getElementById("body").style.backgroundColor = "rgb(153, 20, 20)";
        console.log("red");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/9.png'>";
    };
    if(s == 22){
        document.getElementById("body").style.backgroundColor = "rgb(206, 124, 17)";
        console.log("orange");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/10.png'>";
    };
    if(s == 23){
        document.getElementById("body").style.backgroundColor = "rgb(241, 238, 42)";
        console.log("yellow");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/11.png'>";
    };
    if(s == 24){
        document.getElementById("body").style.backgroundColor = "rgb(49, 241, 42)";
        console.log("lgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/12.png'>";
    };
    if(s == 25){
        document.getElementById("body").style.backgroundColor = "rgb(17, 100, 14)";
        console.log("dgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/1.png'>";
    };
    if(s == 26){
        document.getElementById("body").style.backgroundColor = "rgb(79, 125, 192)";
        console.log("lblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/2.png'>";
    };
    if(s == 27){
        document.getElementById("body").style.backgroundColor = "rgb(27, 6, 122)";
        console.log("dblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/3.png'>";
    };
    if(s == 28){
        document.getElementById("body").style.backgroundColor = "rgb(91, 25, 167)";
        console.log("purple");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/4.png'>";
    };
    if(s == 29){
        document.getElementById("body").style.backgroundColor = "rgb(201, 52, 188)";
        console.log("pink");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/5.png'>";
    };
    if(s == 30){
        document.getElementById("body").style.backgroundColor = "rgb(255, 255, 255)";
        console.log("white");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/6.png'>";
    };
    if(s == 31){
        document.getElementById("body").style.backgroundColor = "rgb(153, 20, 20)";
        console.log("red");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/7.png'>";
    };
    if(s == 32){
        document.getElementById("body").style.backgroundColor = "rgb(206, 124, 17)";
        console.log("orange");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/8.png'>";
    };
    if(s == 33){
        document.getElementById("body").style.backgroundColor = "rgb(241, 238, 42)";
        console.log("yellow");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/9.png'>";
    };
    if(s == 34){
        document.getElementById("body").style.backgroundColor = "rgb(49, 241, 42)";
        console.log("lgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/10.png'>";
    };
    if(s == 35){
        document.getElementById("body").style.backgroundColor = "rgb(17, 100, 14)";
        console.log("dgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/11.png'>";
    };
    if(s == 36){
        document.getElementById("body").style.backgroundColor = "rgb(79, 125, 192)";
        console.log("lblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/12.png'>";
    };
    if(s == 37){
        document.getElementById("body").style.backgroundColor = "rgb(27, 6, 122)";
        console.log("dblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/1.png'>";
    };
    if(s == 38){
        document.getElementById("body").style.backgroundColor = "rgb(91, 25, 167)";
        console.log("purple");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/2.png'>";
    };
    if(s == 39){
        document.getElementById("body").style.backgroundColor = "rgb(201, 52, 188)";
        console.log("pink");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/3.png'>";
    };
    if(s == 40){
        document.getElementById("body").style.backgroundColor = "rgb(255, 255, 255)";
        console.log("white");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/4.png'>";
    };
    if(s == 41){
        document.getElementById("body").style.backgroundColor = "rgb(153, 20, 20)";
        console.log("red");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/5.png'>";
    };
    if(s == 42){
        document.getElementById("body").style.backgroundColor = "rgb(206, 124, 17)";
        console.log("orange");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/6.png'>";
    };
    if(s == 43){
        document.getElementById("body").style.backgroundColor = "rgb(241, 238, 42)";
        console.log("yellow");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/7.png'>";
    };
    if(s == 44){
        document.getElementById("body").style.backgroundColor = "rgb(49, 241, 42)";
        console.log("lgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/8.png'>";
    };
    if(s == 45){
        document.getElementById("body").style.backgroundColor = "rgb(17, 100, 14)";
        console.log("dgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/9.png'>";
    };
    if(s == 46){
        document.getElementById("body").style.backgroundColor = "rgb(79, 125, 192)";
        console.log("lblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/10.png'>";
    };
    if(s == 47){
        document.getElementById("body").style.backgroundColor = "rgb(27, 6, 122)";
        console.log("dblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/11.png'>";
    };
    if(s == 48){
        document.getElementById("body").style.backgroundColor = "rgb(91, 25, 167)";
        console.log("purple");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/12.png'>";
    };
    if(s == 49){
        document.getElementById("body").style.backgroundColor = "rgb(201, 52, 188)";
        console.log("pink");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/1.png'>";
    };
    if(s == 50){
        document.getElementById("body").style.backgroundColor = "rgb(255, 255, 255)";
        console.log("white");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/2.png'>";
    };
    if(s == 51){
        document.getElementById("body").style.backgroundColor = "rgb(153, 20, 20)";
        console.log("red");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/3.png'>";
    };
    if(s == 52){
        document.getElementById("body").style.backgroundColor = "rgb(206, 124, 17)";
        console.log("orange");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/4.png'>";
    };
    if(s == 53){
        document.getElementById("body").style.backgroundColor = "rgb(241, 238, 42)";
        console.log("yellow");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/5.png'>";
    };
    if(s == 54){
        document.getElementById("body").style.backgroundColor = "rgb(49, 241, 42)";
        console.log("lgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/6.png'>";
    };
    if(s == 55){
        document.getElementById("body").style.backgroundColor = "rgb(17, 100, 14)";
        console.log("dgreen");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/7.png'>";
    };
    if(s == 56){
        document.getElementById("body").style.backgroundColor = "rgb(79, 125, 192)";
        console.log("lblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/8.png'>";
    };
    if(s == 57){
        document.getElementById("body").style.backgroundColor = "rgb(27, 6, 122)";
        console.log("dblue");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/9.png'>";
    };
    if(s == 58){
        document.getElementById("body").style.backgroundColor = "rgb(91, 25, 167)";
        console.log("purple");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/10.png'>";
    };
    if(s == 59){
        document.getElementById("body").style.backgroundColor = "rgb(201, 52, 188)";
        console.log("pink");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/11.png'>";
    };
    if(s == 0){
        document.getElementById("body").style.backgroundColor = "rgb(255, 255, 255)";
        console.log("white");
        document.getElementById("face").innerHTML = "<img src = 'images/cat/12.png'>";
    };

    document.getElementById("myDay").innerHTML = day + ", "+m+" "+days+", "+years;

    // Time logic
    if(h >= 12){
        session = "PM";
    }

    if(h == 0){
        h = 12;
    }

    if(h>12){
        h -= 12;
    }

    h = (h<10)?"0"+h:h;
    mm=(mm<10)?"0"+mm:mm;
    s = (s<10)?"0"+s : s;

    let time = `${h}: ${mm}: ${s} ${session}`;

    document.getElementById("myClock").innerHTML = time;

    setTimeout(showDate, 1000);
}

showDate();