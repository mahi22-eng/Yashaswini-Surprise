/* =========================
   START STORY
========================= */

function startStory() {

    document
        .getElementById("welcome")
        .classList.add("hidden");

    document
        .getElementById("beginning")
        .classList.remove("hidden");

}


/* =========================
   SHOW MEMORIES
========================= */

function showMemories() {

    document
        .getElementById("beginning")
        .classList.add("hidden");

    document
        .getElementById("memories")
        .classList.remove("hidden");

}


/* =========================
   MEMORIES
========================= */

const memories = [

    {
        photo: "images/memory1.jpg",

        title: "My Favourite Person ❤️",

        text:
            "Ee photo noddaga nanage ondu thing anisutte... 'How did I get this lucky?' 🥹❤️ Ninna smile nodidre enough, my whole day becomes better."
    },

    {
        photo: "images/memory2.jpg",

        title: "My Cutest Chinnu 🥹🤍",

        text:
            "Life alli eshtu things change aadru, ninna jothe iro ee little moments nanage always special. Ninna jothe spend madro time ella nanage tumba precious. ❤️"
    },

    {
        photo: "images/memory3.jpg",

        title: "Always Believe In Yourself 🌸",

        text:
            "Yashumaa, ninge mundhe tumba beautiful things ide. Sometimes you may doubt yourself, but please remember... nanu ninna mele full confidence ittkondidini. You can do it, Doctor. 🤍"
    }

];


let currentMemory = 0;


/* =========================
   UPDATE MEMORY
========================= */

function updateMemory() {

    const photo =
        document.getElementById("memoryPhoto");

    const title =
        document.getElementById("memoryTitle");

    const text =
        document.getElementById("memoryText");

    const number =
        document.getElementById("memoryNumber");


    photo.style.opacity = 0;


    setTimeout(function () {

        photo.src =
            memories[currentMemory].photo;

        title.textContent =
            memories[currentMemory].title;

        text.textContent =
            memories[currentMemory].text;

        number.textContent =
            `${currentMemory + 1} / ${memories.length}`;

        photo.style.opacity = 1;

    }, 200);

}


/* =========================
   NEXT MEMORY
========================= */

function nextMemory() {

    currentMemory++;

    if (currentMemory >= memories.length) {

        openExamSupport();

        currentMemory = 0;

        return;
    }

    updateMemory();

}


/* =========================
   PREVIOUS MEMORY
========================= */

function previousMemory() {

    currentMemory--;

    if (currentMemory < 0) {

        currentMemory =
            memories.length - 1;
    }

    updateMemory();

}


/* =========================
   EXAM SUPPORT
========================= */

function openExamSupport() {

    document
        .getElementById("memories")
        .classList.add("hidden");

    document
        .getElementById("examSupport")
        .classList.remove("hidden");

}


/* =========================
   LOVE LETTER
========================= */

function openLetter() {

    document
        .getElementById("examSupport")
        .classList.add("hidden");

    document
        .getElementById("letter")
        .classList.remove("hidden");

    startTyping();

}


/* =========================
   LOVE LETTER TEXT
========================= */

const letterMessage =
`My Darling ❤️

I don't know if words can really explain how much you mean to me...

But I still want to say this.

I love youuu sooo muchhhh. 🥹❤️

Tomorrow when you sit for your exam, don't be scared.

Ondu deep breath togo...
Calm aagu...
And just give your best.

Ninge yella answer gothilla andre kooda,
that's okay.

You don't have to be perfect.

You just have to believe in yourself
and give it your best.

Nan yavaglu ninna support madtini.

Exam henge irli...
marks henge barli...

NO MATTER WHAT,
I AM ALWAYS PROUD OF YOU. ❤️

Because I know how hard you've worked.

So go write your exam with confidence, Chinnu.

And one day,
when I see you as a Doctor...

I know I'll be the happiest person. 🥹💊🤍

I love you, Yashumaa.

Always. ❤️`;


/* =========================
   TYPING EFFECT
========================= */

function startTyping() {

    const element =
        document.getElementById("letterText");

    element.textContent = "";

    let index = 0;


    function typeCharacter() {

        if (index < letterMessage.length) {

            element.textContent +=
                letterMessage.charAt(index);

            index++;

            setTimeout(
                typeCharacter,
                30
            );

        }

    }

    typeCharacter();

}


/* =========================
   FINAL SURPRISE
========================= */

function showFinal() {

    document
        .getElementById("letter")
        .classList.add("hidden");

    document
        .getElementById("final")
        .classList.remove("hidden");

}