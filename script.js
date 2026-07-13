// 🔒 PASSCODE

function checkPassword(){

    let code = document.getElementById("password").value;

    if(code=="0824"){

       document.getElementById("lock").innerHTML = `
<h1>❤️ Unlocking...</h1>
<h2>✨✨✨</h2>
`;

setTimeout(function(){

document.getElementById("lock").style.display="none";

document.getElementById("home").style.display="block";

},1800);

        // ▶️ Start background music with intelligent audio selection
        playBirthdayAudio();

    }

    else{

        alert("Wrong Passcode ❤️");

    }

}

// 🎵 INTELLIGENT AUDIO SELECTION LOGIC
// Before 8 August: birthday.mp3
// On 8 August: happybdaysong.mp3
// After 8 August: continue existing behavior

function playBirthdayAudio() {
    const music = document.getElementById("bgMusic");
    const today = new Date();
    
    // Get current date (month = 0-11, so August = 7)
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    const currentYear = today.getFullYear();
    
    // August 8, 2026 reference date
    const birthdayMonth = 7; // August
    const birthdayDate = 8;
    
    let audioFile = "birthday.mp3"; // Default
    
    // Determine which audio to play
    if (currentMonth < birthdayMonth) {
        // Before August - play birthday.mp3
        audioFile = "birthday.mp3";
    } else if (currentMonth === birthdayMonth) {
        // August
        if (currentDate === birthdayDate) {
            // Exactly August 8 - play the special birthday song
            audioFile = "happybdaysong.mp3";
        } else if (currentDate < birthdayDate) {
            // Before August 8 - play birthday.mp3
            audioFile = "birthday.mp3";
        } else {
            // After August 8 - continue with existing behavior
            audioFile = "birthday.mp3";
        }
    } else {
        // After August - continue existing behavior
        audioFile = "birthday.mp3";
    }
    
    // Set the audio source and play
    music.src = audioFile;
    music.play().catch(function(error){
        console.log("Audio play error:", error);
    });
}

// 📅 Date Helpers

function todayOnly() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
}

function getDaysLeft() {

    const birthday = new Date(2026, 7, 8); // August = 7
    birthday.setHours(0, 0, 0, 0);

    return Math.round((birthday - todayOnly()) / 86400000);

}


// ⏳ COUNTDOWN TO 8 AUGUST


let birthday = new Date("August 8, 2026 00:00:00").getTime();



let countdown = setInterval(function(){

let now =
new Date().getTime();



let distance =
birthday-now;



let days =
Math.floor(
distance/(1000*60*60*24)
);



let hours =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);



let minutes =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);



let seconds =
Math.floor(
(distance%(1000*60))
/
1000
);



if (distance < 0) {

clearInterval(countdown);

    const countdownElement = document.getElementById("countdown");

if (countdownElement) {
    countdownElement.innerHTML = "🎉 Happy Birthday Vishal! ❤️";
}

} else {

  const countdownElement = document.getElementById("countdown");

if (countdownElement) {

    countdownElement.innerHTML =
        days + " Days ❤️ " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";

}

}


},1000);




// 💌 DAILY LOVE MESSAGES

let messages=[

"❤️ 30 days to go… 🎈<br><br>Officially starting the countdown for the most annoying person who's somehow my favourite too. 😌",

"❤️ 29 days to go.<br><br>Just so you know… someone is already more excited for your birthday than you probably are.",

"❤️ 28 days to go.<br><br>You keep asking, 'Mujhme aisa kya special hai?'<br><br>Let's see… maybe I'll give you one answer every few days. 🤍",

"❤️ 27 days to go.<br><br>Today's reason: you care more than you let people see.",

"❤️ 26 days to go.<br><br>You pretend not to notice things… but somehow you notice everything about me.",

"❤️ 25 days to go.<br><br>You know what's funny? Random things still remind me of you.",

"❤️ 24 days to go.<br><br>No reason for today's message… bas mann kiya tumhe yaad dilane ka ki 24 days left. 😊",

"❤️ 23 days to go.<br><br>I wonder if you'll ever stop asking why I love you… maybe not. 😂",

"❤️ 22 days to go.<br><br>You make me laugh, irritate me, argue with me… and somehow still make me stay.",

"❤️ 21 days to go.<br><br>Three weeks left. I hope this birthday makes you smile the way you unknowingly make me smile.",

"❤️ 20 days to go.<br><br>I still think the best thing about you is that you never try to impress anyone. You're just… you.",

"❤️ 19 days to go.<br><br>Aaj bas itna… take care of yourself. I need the birthday boy fit and happy. 😌",

"❤️ 18 days to go.<br><br>You're not perfect… and maybe that's exactly what I love.",

"❤️ 17 days to go.<br><br>Today's reminder: don't overwork, eat on time, and yes… this is me caring. 😒❤️",

"❤️ 16 days to go.<br><br>You make ordinary days feel less ordinary.",

"❤️ 15 days to go.<br><br>Halfway there. I don't know why your birthday makes me this excited… but it does.",

"❤️ 14 days to go.<br><br>I hope one day you see yourself the way I see you.",

"❤️ 13 days to go.<br><br>Today's answer: your heart is much softer than you pretend.",

"❤️ 12 days to go.<br><br>You're one of the very few people I never have to force myself to remember. You just cross my mind naturally.",

"❤️ 11 days to go.<br><br>I still think meeting you was one of those little accidents life got right.",

"❤️ 10 days to go. 🎉<br><br>Now we're officially in single digits tomorrow… get ready.",

"❤️ 9 days to go.<br><br>Your birthday is coming… and yes, I have been counting from the beginning. 🤍",

"❤️ 8 days to go.<br><br>You're still my favourite person to annoy.",

"❤️ 7 days to go.<br><br>Final week. No escaping my countdown now. 😌",

"❤️ 6 days to go.<br><br>Thank you for all the little things you think nobody notices.",

"❤️ 5 days to go.<br><br>Maybe what's special about you isn't one big thing… maybe it's a hundred little things.",

"❤️ 4 days to go.<br><br>And somehow… I fell in love with every one of those little things.",

"❤️ 3 days to go.<br><br>Almost your birthday… and I'm probably more excited than you. 😂",

"❤️ 2 days to go.<br><br>Just two more sleeps… then I get to celebrate my favourite human.",

"❤️ 1 day to go.<br><br>Tomorrow you'll ask me again, 'Mujhme aisa kya special hai?'<br><br>Tomorrow… I'll answer."

];


// ❤️ DAILY MESSAGE

const daysLeft = getDaysLeft();

console.log("Today's Date:", todayOnly());
console.log("Days Left:", daysLeft);

const dailyMessage = document.getElementById("dailyMessage");

if (dailyMessage) {

    if (daysLeft >= 1 && daysLeft <= 30) {

        dailyMessage.innerHTML = messages[30 - daysLeft];

    }

    else if (daysLeft === 0) {

        dailyMessage.innerHTML = `
        🎂 Happy Birthday Vishal ❤️
        <br><br>
        Today is finally here.
        <br><br>
        Open your gift. 💌
        `;

    }

}



// 🎁 GIFT OPEN

function openGift(){

document.getElementById("gift").innerHTML="🎁✨✨❤️✨";


setTimeout(function(){

document.getElementById("home")
.style.display="none";


const daysLeft = getDaysLeft();

if(daysLeft <= 0){

// 🎂 Birthday day cake first

document.getElementById("cakePage")
.style.display="block";

}

else{

    document.getElementById("photoSection").style.display="block";
showDailyPhoto();

}


},1000);

}



// 📸 SHOW LETTER

function showLetter(){

    document.getElementById("photoSection").style.display="none";

    document.getElementById("photoSection").innerHTML = `

<h1>🔒</h1>

<h2>Your Biggest Surprise</h2>

<p>

Come back on

<b>8 August ❤️</b>

<br><br>

Good things are worth waiting for.

</p>

`;

    document.getElementById("home").style.display="block";

}

// 🎂 SHOW CAKE

function showCake(){

    const today = new Date();
    const birthdayDate = new Date("August 8, 2026 00:00:00");

    document.getElementById("letter").style.display = "none";

    if(today >= birthdayDate){

        document.getElementById("cakePage").style.display = "block";

    }else{

        alert("🎂 The birthday surprise opens only on 8 August ❤️");

        document.getElementById("photoSection").style.display = "block";

    }

}

// 🎂 Blow Candle

function blowCandle(){

    document.getElementById("cake").style.transform = "scale(1.08)";
    document.getElementById("cake").style.opacity = ".9";

    createConfetti();

    setTimeout(function(){

        showBirthdayLetter();

    },2500);

}




// 🎆 CONFETTI

function createConfetti(){


let confetti=document.createElement("div");


confetti.className="confetti";


confetti.innerHTML=
"🎉🎊✨❤️🎉🎊✨❤️";


document.body.appendChild(confetti);



setTimeout(function(){

confetti.remove();

},3000);


}



// ❤️ FINAL PAGE

function showFinal(){


document.getElementById("cakePage")
.style.display="none";


document.getElementById("finalPage")
.style.display="block";


}

function showBirthdayLetter(){

document.getElementById("cakePage")
.style.display="none";


document.getElementById("birthdayLetter")
.style.display="block";


document.getElementById("birthdayLetterText").innerHTML = `



<h2>Happy Birthday Sukhija Ji ❤️</h2>
<p>

Dear Vishal,

<br><br>

Happy Birthday.

<br><br>

I don't know if birthdays are supposed to be about gifts, surprises, or perfect words. But if there's one thing I've wanted to answer for the longest time, it's the question you keep asking me.

<br><br>

"Why do you love me? What's so special about me?"

<br><br>

The truth is, I don't think I ever chose to love you.

<br><br>

If love were logical, maybe I would've picked someone easier. Someone who never argued with me. Someone who always knew the right words. Someone who made everything simple.

<br><br>

But then… that wouldn't have been you.

<br><br>

And somewhere along the way, "you" became my favorite place.

<br><br>

What's special about you isn't something I can point at. It's the little things you probably don't even notice.

<br><br>

The way you quietly take care of me without announcing it.
<br>
The way you notice when something is wrong even when I say I'm fine.
<br>
The way you remember the smallest things about me.

<br><br>

You never tried to become my perfect person.

<br><br>

You just became my person.

<br><br>

People think love happens in big moments. I think it happens in ordinary ones.

<br><br>

In random phone calls.
<br>
In unnecessary fights.
<br>
In moments when we stop talking but still don't stop caring.

<br><br>

We've had misunderstandings, distance, and difficult days.

<br><br>

But somehow every version of my life that I imagine has a little bit of you in it.

<br><br>

You aren't perfect.

<br><br>

Neither am I.

<br><br>

Maybe that's why our story has never looked perfect.

<br><br>

But every memory with you taught me something about love.

<br><br>

Not the movie kind.

<br><br>

The real kind.

<br><br>

The kind that stays through ego, misunderstandings, silence, and unfinished conversations.

<br><br>

I love you because when I look at you, I don't see someone extraordinary.

<br><br>

I see someone who somehow became home.

<br><br>

Thank you for every small effort you thought went unnoticed.

<br><br>

Thank you for being imperfect, stubborn, annoying, protective, and uniquely you.

<br><br>

Happy Birthday Vishal ❤️

<br><br>

I hope this year brings you peace, happiness, and every dream you are working for.

<br><br>

Never forget that someone loved you not because you were perfect…

<br><br>

…but because you were you.

<br><br>

Always,
<br>
Sakshi ❤️

</p>

`;

}

function openEnvelope(){

    document
    .getElementById("envelope")
    .classList.add("open");

}


function toggleMusic(){

const music=document.getElementById("bgMusic");

if(music.paused){

music.play();

document.getElementById("musicBtn").innerHTML="🔊 Playing";

}

else{

music.pause();

document.getElementById("musicBtn").innerHTML="🎵 Music";

}

}

const photos = [

"photos/photo1.jpg",
"photos/photo2.jpg",
"photos/photo3.jpg",
"photos/photo4.jpg",
"photos/photo5.jpg",
"photos/photo6.jpg",
"photos/photo7.jpg",
"photos/photo8.jpg",
"photos/photo9.jpg",
"photos/photo10.jpg",
"photos/photo11.jpg",
"photos/photo12.jpg",
"photos/photo13.jpg",
"photos/photo14.jpg",
"photos/photo15.jpg",
"photos/photo16.jpg",
"photos/photo17.jpg",
"photos/photo18.jpg",
"photos/photo19.jpg",
"photos/photo20.jpg"

];

const captions=[

"Our first beautiful memory ❤️",

"One smile... and my whole day became better.",

"You'll never know how much I love this picture.",

"My favourite place has always been beside you.",

"This still makes me smile.",

"You looked cute here... don't argue. 😂",

"A little memory I'll always keep.",

"This picture reminds me why I stayed.",

"Distance never changed how I felt.",

"I still remember this day perfectly.",

"One more memory added forever.",

"You never noticed how happy I looked.",

"This moment deserved to be frozen forever.",

"You were unknowingly making memories.",

"I'd choose this day again.",

"One of my favourite smiles.",

"Some memories never fade.",

"Almost there... ❤️",

"The surprise is waiting...",

"Ready for the biggest surprise? 🎁"

];

// 📸 Slideshow
// 📸 Daily Photo

function showDailyPhoto() {

    const photo = document.getElementById("dailyPhoto");
    const caption = document.getElementById("photoCaption");

    if (!photo || !caption) return;

    const birthday = new Date(2026, 7, 8);
    birthday.setHours(0,0,0,0);

    const today = new Date();
    today.setHours(0,0,0,0);

    const daysLeft = Math.round((birthday - today) / 86400000);

    // 30 days before birthday → photo1
    let index = 30 - daysLeft;

    if(index < 0) index = 0;

    if(index >= photos.length)
        index = photos.length - 1;

    photo.src = photos[index];
    caption.innerHTML = captions[index];

}
