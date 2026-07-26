// 🔒 PASSCODE

function checkPassword(){

    let code = document.getElementById("password").value;

    if(code=="0824"){

       document.getElementById("lock").innerHTML = `
<h1>❤️ Unlocking...</h1>
<h2>✨✨✨</h2>
`;

 document.getElementById("lock").style.animation = "fadeUp 0.9s ease-out";
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
// On 8 August (after unlock): happybdaysong.mp3
// After 8 August: birthday.mp3

function playBirthdayAudio() {
     const music = document.getElementById("bgMusic");
     const today = new Date();
     
     const currentMonth = today.getMonth();
     const currentDate = today.getDate();
     
     const birthdayMonth = 7;
     const birthdayDate = 8;
     
     let audioFile = "birthday.mp3";
     
     if (currentMonth < birthdayMonth) {
         audioFile = "birthday.mp3";
     } else if (currentMonth === birthdayMonth) {
         if (currentDate === birthdayDate) {
             audioFile = "happybdaysong.mp3";
         } else if (currentDate < birthdayDate) {
             audioFile = "birthday.mp3";
         } else {
             audioFile = "birthday.mp3";
         }
     } else {
         audioFile = "birthday.mp3";
     }
     
     music.src = audioFile;
     music.volume = 0.5;
     
     const playPromise = music.play();
     
     if (playPromise !== undefined) {
         playPromise.catch(function(error){
             console.log("Audio play (autoplay may be blocked):", error);
         });
     }
     
     console.log("Playing:", audioFile);
 }

// 📅 Date Helpers

function todayOnly() {
     const d = new Date();
     d.setHours(0, 0, 0, 0);
     return d;
 }

function getDaysLeft() {

     const birthday = new Date(2026, 7, 8);
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

 "❤️ 12 days to go.<br><br>Sometimes I wonder if you remember the first day we met. I do. It was just another ordinary day in the office, another routine morning that I thought would be like every other day. I had no idea that among so many people, there was one person who would quietly change my life forever. If someone had told me then that one day you would become the person my heart would always search for, I would have laughed. Life has a beautiful way of introducing us to people without telling us how important they'll become.",

 "❤️ 11 days to go.<br><br>At first, we were just colleagues. Our conversations were simple, casual, and probably meaningless to everyone else. But to me, they slowly became the best part of every working day. I started looking forward to seeing you, finding silly reasons to talk to you, and smiling every time our paths crossed. Without realizing it, the office stopped feeling like just a workplace. It became the place where my favourite person was.",

 "❤️ 10 days to go. 🎉<br><br>People say home is where you belong. I used to think home was a place. Then you came into my life and quietly proved me wrong. Home became the comfort I felt when I talked to you. It became the peace I found in your presence, the happiness in your smile, and the safety of knowing that somehow everything would be okay if you were beside me. You never tried to become my safe place—you simply became one.",

 "❤️ 9 days to go.<br><br>Your birthday is coming… and yes, I have been counting from the beginning. 🤍I have a complaint against you. Before meeting you, I was perfectly capable of keeping things to myself. Now every tiny thing happens, and my first thought is, I need to tell Vishal. Whether it's good news, bad news, office gossip, or even something completely random, somehow you've become my favourite person to share life with. Honestly... you've spoiled me. Now I don't know how to enjoy anything without thinking, I wish you were here.",

 "❤️ 8 days to go.<br><br>You know what's funny? If someone looked at us from the outside, they'd probably think all we do is argue. Sometimes I wonder how two people can fight over the smallest, most ridiculous things and still find a way back to each other every single time. I still remember all those moments when we'd stop talking because both of us were too stubborn to say sorry first. I would act like I didn't care, but the truth is... I cared a little too much. I'd keep checking my phone, hoping your message would pop up, pretending I wasn't waiting when in reality I was counting every minute. Those fights taught me something I never expected—that I wasn't scared of the arguments, I was scared of the silence. Because life somehow felt incomplete whenever you weren't a part of my day,You're still my favourite person to annoy.",

 "❤️ 7 days to go.<br><br>Final week. No escaping my countdown now. 😌 Sometimes I sit and wonder how different my life would have been if our paths had never crossed. Honestly... I don't even like imagining that version of my life. Because it wouldn't have your laugh, your random calls, your silly arguments, or those moments when you somehow managed to make me smile even when I had decided I wouldn't. If life asked me to start over, I wouldn't ask for a perfect story. I'd ask for the same office, the same first meeting, the same annoying boy who somehow became my favourite person, and the same journey that slowly taught my heart what home feels like.",

 "❤️ 6 days to go.<br><br>Do you know what you've done to me? It's honestly unfair. Before meeting you, I used to deal with everything on my own. But now, the moment something good happens, I want to tell you first. The moment something goes wrong, I look for you without even thinking. It's almost like my brain has created a shortcut: 'Need comfort? Go to Vishal.' 😂 I don't even know when that happened. Somewhere between our endless conversations, your terrible jokes, and your constant teasing, you quietly became the person who calms the chaos inside me. You gave direction to thoughts that were falling apart, and somehow your voice became the place where my overthinking finally takes a break.",

 "❤️ 5 days to go.<br><br>Do you know what scares me the most? It's not our fights. It's not misunderstandings. It's the thought of a day where we stop sharing our lives with each other. Because somewhere along the journey, you've become such an important part of my everyday life that imagining a day without hearing your voice feels... incomplete. Maybe that's when I understood that this wasn't just love anymore. It had become home.",

 "❤️ 4 days to go.<br><br>I know I'm not always easy to understand. Sometimes I overthink, sometimes I get emotional over little things, and sometimes I say I'm fine when I am clearly not. Thank you for staying through all those versions of me. Thank you for being patient even when I made it difficult. You never made me feel like I was too much, and that's a feeling I'll always be grateful for.And somehow… I fell in love with every one of those little things.",

 "❤️ 3 days to go.<br><br>There was a time when seeing you was just a coincidence. Then slowly, it became something I looked forward to every single day. I'd enter the office and, before even settling down, my eyes would unconsciously search for you. It's funny because I didn't even realize I was doing it. My heart had quietly made you part of its daily routine long before my mind understood what was happening",

 "❤️ 2 days to go.<br><br>Just two more sleeps… then I get to celebrate my favourite human. I don't think you realize how much you've changed me. Before you, I carried everything alone. I overthought everything alone. I celebrated alone. I cried alone. Then you slowly became the person I wanted to tell everything to. You didn't just become someone I loved—you became someone who made life easier to live. And that's one of the greatest gifts anyone has ever given me    ",

 "❤️ 1 day to go.<br><br>If one day we both grow old and our hair turns grey, I hope you'll still look at me the way you did in those office corridors. And if anyone ever asks me where my favourite love story began, I won't say it started with a proposal or a date. I'll smile and say... it started on an ordinary office day, with an ordinary conversation, with a boy who had no idea he was about to become my entire world.Tomorrow you'll ask me again, 'Mujhme aisa kya special hai?'<br><br>Tomorrow… I'll answer."

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

         document.getElementById("photoSection").style.display="block";
         showPhotoGallery();

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


 confetti.style.cssText = `
     position: fixed;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     font-size: 60px;
     opacity: 1;
     z-index: 8000;
     animation: confettiFall 3s ease-out forwards;
     pointer-events: none;
 `;

 document.body.appendChild(confetti);



 setTimeout(function(){

 confetti.remove();

 },3000);


 }

// Add confetti animation to CSS
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
     @keyframes confettiFall {
         0% {
             opacity: 1;
             transform: translate(-50%, -50%) scale(1) rotateZ(0deg);
         }
         100% {
             opacity: 0;
             transform: translate(-50%, 400px) scale(0.5) rotateZ(360deg);
         }
     }
`;
document.head.appendChild(confettiStyle);


// 🎆 GRAND CELEBRATION EFFECTS

function createCelebrationSparkles() {
    const effectsContainer = document.getElementById("celebrationEffects");
    if (!effectsContainer) return;
    
    const sparkles = ["✨", "💫", "⭐", "🌟", "❤️", "💖", "🎉", "🎊"];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(function() {
            const sparkle = document.createElement("div");
            sparkle.className = "celebration-sparkle";
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            
            const tx = (Math.random() - 0.5) * 400;
            const ty = (Math.random() - 0.5) * 400 - 300;
            
            sparkle.style.left = startX + "px";
            sparkle.style.top = startY + "px";
            sparkle.style.setProperty("--tx", tx + "px");
            sparkle.style.setProperty("--ty", ty + "px");
            
            effectsContainer.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 2000);
        }, i * 60);
    }
}

// ❤️ FINAL PAGE

function showFinal(){

 document.getElementById("cakePage")
 .style.display="none";

 document.getElementById("finalPage")
 .style.display="block";

 createCelebrationSparkles();

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
     
     setTimeout(function(){
         document.getElementById("birthdayLetter").style.display="none";
         document.getElementById("finalPage").style.display="block";
         createConfetti();
         createCelebrationSparkles();
     }, 3500);

 }


const photos = [

 "photo/photo1.jpg",
 "photo/photo2.jpg",
 "photo/photo3.jpg",
 "photo/photo4.jpg",
 "photo/photo5.jpg",
 "photo/photo6.jpg",
 "photo/photo7.jpg",
 "photo/photo8.jpg",
 "photo/photo9.jpg",
 "photo/photo10.jpg",
 "photo/photo11.jpg",
 "photo/photo12.jpg",
 "photo/photo13.jpg",
 "photo/photo14.jpg",
 "photo/photo15.jpg",
 "photo/photo16.jpg",
 "photo/photo17.jpg",
 "photo/photo18.jpg",
 "photo/photo19.jpg",
 "photo/photo20.jpg"

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

// 📸 Daily Photo - Before August 8

function showDailyPhoto() {

     const photo = document.getElementById("dailyPhoto");
     const caption = document.getElementById("photoCaption");

     if (!photo || !caption) return;

     const birthday = new Date(2026, 7, 8);
     birthday.setHours(0,0,0,0);

     const today = new Date();
     today.setHours(0,0,0,0);

     const daysLeft = Math.round((birthday - today) / 86400000);

     let index = 30 - daysLeft;

     if(index < 0) index = 0;

     if(index >= photos.length)
         index = photos.length - 1;

     photo.src = photos[index];
     caption.innerHTML = captions[index];

 }

// 📸 Photo Gallery - On August 8 (Birthday)

function showPhotoGallery() {

     const photoSection = document.getElementById("photoSection");
     
     if (!photoSection) return;

     photoSection.innerHTML = `
         <h1>📸 Our Beautiful Memories ❤️</h1>
         <div class="gallery" id="galleryContainer"></div>
         <br>
         <button onclick="showLetterFromGallery()">
             Continue Our Story ❤️ 💌
         </button>
     `;

     const galleryContainer = document.getElementById("galleryContainer");
     
     for (let i = 0; i < photos.length; i++) {
         const photoCard = document.createElement("div");
         photoCard.className = "photoCard";
         photoCard.innerHTML = `
             <img src="${photos[i]}" alt="Memory ${i + 1}" onerror="this.style.opacity='0.5'"/>
             <p>${captions[i]}</p>
         `;
         galleryContainer.appendChild(photoCard);
     }

     console.log("Gallery initialized with 20 photos");

 }

function showLetterFromGallery(){
     document.getElementById("photoSection").style.display="none";
     showBirthdayLetter();
 }
