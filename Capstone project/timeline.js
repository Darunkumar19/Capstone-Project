document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    const description = document.getElementById("arc-description");
    const image = document.getElementById("arc-image");
    const timelineDescription = document.querySelector(".timeline-description");

    const arcDetails = {
        "East Blue Saga": {
            text: "The East Blue Saga is the first arc of the One Piece series, introducing Luffy and the core members of his crew.",
            img: "https://static.wikia.nocookie.net/onepiece/images/0/01/East_Blue_Saga.png/revision/latest?cb=20130125212119"
        },
        "Arabasta Saga": {
            text: "The Alabasta Saga features the Straw Hat Pirates' journey to the desert kingdom of Alabasta, where they fight against the villain Crocodile.",
            img: "https://static.wikia.nocookie.net/onepiece/images/1/16/Arabasta_Saga.png/revision/latest?cb=20130125212258"
        },
        "Sky Island Saga": {
            text: "In the Skypiea Saga, the crew travels to the sky island of Skypiea, where they battle the ruler Enel.",
            img: "https://static.wikia.nocookie.net/onepiece/images/b/b5/Sky_Island_Saga.png/revision/latest?cb=20130125212823"
        },
        "Water 7 Saga": {
            text: "The Water 7 Saga involves the crew's encounter with the enigmatic shipwrights and the conflict with the World Government.",
            img: "https://static.wikia.nocookie.net/onepiece/images/8/82/Water_7_Saga.png/revision/latest?cb=20130125213206"
        },
        "Thriller Bark Saga": {
            text: "The Thriller Bark Saga is a series of",
            img: "https://static.wikia.nocookie.net/onepiece/images/f/f8/Thriller_Bark_Saga.png/revision/latest?cb=20201210121149"
        },
        "Summit War Saga": {
            text: "The Marineford War arc focuses on the conflict between the Whitebeard Pirates and the Marines in a battle to rescue Luffy's brother, Ace.",
            img: "https://static.wikia.nocookie.net/onepiece/images/5/50/Summit_War_Saga.png/revision/latest?cb=20160117102137"
        },
        "Fishman Island Saga": {
            text: "The Fishman Island Saga takes place in th",
            img: "https://static.wikia.nocookie.net/onepiece/images/c/c0/Fish-Man_Island_Saga.png/revision/latest/scale-to-width-down/1000?cb=20210116215312"
        },
        "Dressrosa Saga": {
            text: "The Dressrosa Saga follows the Straw Hat Pirates as they fight against the tyrant Doflamingo, who rules over the kingdom of Dressrosa.",
            img: "https://static.wikia.nocookie.net/onepiece/images/5/52/Dressrosa_Arc.png/revision/latest?cb=20150319033925"
        },
        "Whole Cake Island Saga": {
            text: "The Whole Cake Island Saga is the 8",
            img: "https://static.wikia.nocookie.net/onepiece/images/6/6b/Whole_Cake_Island_Arc.png/revision/latest?cb=20180227003004"
        },
        "Wano Country Saga": {
            text: "The Wano Country Saga is the current arc" ,
            img: "https://static.wikia.nocookie.net/onepiece/images/a/a3/Wano_Country_Arc.png/revision/latest/scale-to-width-down/1000?cb=20211130095510"
        }
    };

    let fadeTimeout; // Variable to handle fade-out timing

    dots.forEach(dot => {
        dot.addEventListener("mouseenter", function () {
            clearTimeout(fadeTimeout); // Cancel any fade-out action

            const arc = dot.getAttribute("data-arc");
            if (arcDetails[arc]) {
                description.textContent = arcDetails[arc].text;
                image.src = arcDetails[arc].img;
                image.style.display = "block"; // Ensure the image is shown
                timelineDescription.style.opacity = "1"; // Fade-in effect
                image.style.opacity = "1";
                description.style.opacity = "1";
            }
        });

        dot.addEventListener("mouseleave", function () {
            fadeTimeout = setTimeout(() => {
                timelineDescription.style.opacity = "0"; // Start fade-out
                image.style.opacity = "0";
                description.style.opacity = "0";

                setTimeout(() => {
                    image.style.display = "none"; // Hide after fade-out completes
                }, 300); // Matches fade-out duration
            }, 0); // No delay, removes instantly after fading
        });
    });
});