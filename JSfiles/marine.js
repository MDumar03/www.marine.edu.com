const animals = [
    {
        name: "Blue Whale",
        image: "../assets/images/bluewhale.jpg",
        description: "The Blue Whale is the largest animal on Earth, even bigger than any dinosaur! Despite their huge size, Blue Whales eat tiny creatures like krill, which are small shrimp-like animals. They swim long distances across the oceans and can grow up to 100 feet long! These incredible creatures use their size to help them survive in the deep ocean."
    },
    {
        name: "Dolphin",
        image: "../assets/images/dolphin.jpg",
        description: "Dolphins are known for being highly intelligent and playful. They live in oceans all over the world and love to swim in groups called pods. Dolphins communicate with each other using clicks and whistles. They are also very social animals, and sometimes they help humans by guiding them to safety. These creatures are known for their friendly nature and often seem to enjoy playing games!"
    },
    {
        name: "Sea Turtle",
        image: "../assets/images/seaturtles.jpg",
        description: "Sea turtles are ancient creatures that have been living in the oceans for over 100 million years. They are important for ocean health because they help maintain the balance of seaweed and coral reefs. Sea turtles travel long distances to find food and lay their eggs on sandy beaches. They can live for many decades, and some species can even live over 100 years!"
    },
    {
        name: "Octopus",
        image: "../assets/images/octopus.jpg",
        description: "Octopuses are fascinating and highly intelligent animals. They have eight arms and are known for their ability to change color and texture to blend into their surroundings, helping them hide from predators. Octopuses are great problem-solvers and can escape from almost any situation. They also have three hearts and blue blood, which helps them survive in deep ocean waters!"
    },
    {
        name: "Seahorse",
        image: "../assets/images/seahorse.jpg",
        description: "Seahorses are small fish that look like little horses, but they are not actually horses! They live in shallow waters and swim upright. Male seahorses are unique because they carry the eggs in a special pouch until they hatch, which is very rare in the animal world. These charming creatures are often found hiding in seagrass and coral reefs to stay safe from predators."
    }
];

let currentIndex = 0;

function updateAnimalContent() {
    const animal = animals[currentIndex];
    document.getElementById("animal-image").src = animal.image;
    document.getElementById("header-info").innerHTML = `<h2>${animal.name}</h2>`;

    const descriptionElement = document.getElementById("animal-description");
descriptionElement.innerHTML = `<h4>${animal.description}</h4>`;

    document.getElementById("next-Btn").textContent = currentIndex < animals.length - 1 ? "Next" : "Quiz";
}

document.getElementById("next-Btn").addEventListener("click", function() {
    if (currentIndex < animals.length - 1) {
        currentIndex++;
        updateAnimalContent();
    } else {
        window.location.href = 'quiz.html';
    }
});

updateAnimalContent();