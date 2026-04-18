export type QuizQuestion = {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
};

export const quizQuestions: QuizQuestion[] = [
  // Apollo Program
  {
    question: "What year was the Apollo 11 moon landing?",
    answers: ["1972", "1969", "1958", "1962"],
    correctAnswerIndex: 1,
  },
  {
    question: "Who was the first person to walk on the Moon?",
    answers: [
      "Buzz Aldrin",
      "Michael Collins",
      "Neil Armstrong",
      "Alan Shepard",
    ],
    correctAnswerIndex: 2,
  },
  {
    question:
      "Which Apollo mission was the first crewed mission to orbit the Moon?",
    answers: ["Apollo 8", "Apollo 10", "Apollo 7", "Apollo 11"],
    correctAnswerIndex: 0,
  },
  {
    question:
      "What were the famous words Neil Armstrong said upon stepping onto the Moon?",
    answers: [
      "One small step for mankind, one giant leap for man.",
      "That's one small step for a man, one giant leap for mankind.",
      "To the Moon and beyond, for all of humanity.",
      "We came in peace for all nations.",
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      "Which Apollo mission suffered a catastrophic oxygen tank explosion en route to the Moon?",
    answers: ["Apollo 12", "Apollo 14", "Apollo 13", "Apollo 16"],
    correctAnswerIndex: 2,
  },
  {
    question:
      "Who was the Command Module pilot of Apollo 11, who did NOT walk on the Moon?",
    answers: ["Buzz Aldrin", "Alan Bean", "Michael Collins", "Fred Haise"],
    correctAnswerIndex: 2,
  },
  {
    question: "What was the name of the Apollo 11 Lunar Module?",
    answers: ["Intrepid", "Eagle", "Falcon", "Challenger"],
    correctAnswerIndex: 1,
  },
  {
    question: "Which Apollo mission was the last to land on the Moon?",
    answers: ["Apollo 16", "Apollo 17", "Apollo 14", "Apollo 15"],
    correctAnswerIndex: 1,
  },
  {
    question: "Who was the first person to drive a vehicle on the Moon?",
    answers: [
      "Neil Armstrong",
      "David Scott",
      "Alan Shepard",
      "Charles Conrad",
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      "Which Apollo mission never made it to the Moon due to an in-flight emergency?",
    answers: ["Apollo 1", "Apollo 13", "Apollo 7", "Apollo 9"],
    correctAnswerIndex: 1,
  },
  {
    question:
      "How many astronauts in total walked on the Moon during the Apollo program?",
    answers: ["6", "8", "12", "10"],
    correctAnswerIndex: 2,
  },
  {
    question: "What rocket was used to launch the Apollo missions to the Moon?",
    answers: ["Titan II", "Atlas V", "Saturn V", "Falcon Heavy"],
    correctAnswerIndex: 2,
  },

  // International Space Station (ISS)
  {
    question: "In what year was the first module of the ISS launched?",
    answers: ["1995", "1998", "2001", "2000"],
    correctAnswerIndex: 1,
  },
  {
    question:
      "What is the name of the first module launched to begin construction of the ISS?",
    answers: ["Unity", "Zarya", "Destiny", "Zvezda"],
    correctAnswerIndex: 1,
  },
  {
    question: "How many nations are primary partners of the ISS program?",
    answers: ["3", "7", "5", "10"],
    correctAnswerIndex: 2,
  },
  {
    question: "Approximately how far above Earth does the ISS orbit?",
    answers: [
      "150 miles (240 km)",
      "250 miles (400 km)",
      "500 miles (800 km)",
      "100 miles (160 km)",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "How long does it take the ISS to complete one orbit of Earth?",
    answers: [
      "About 90 minutes",
      "About 3 hours",
      "About 24 hours",
      "About 45 minutes",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "What was the first commercial spacecraft to dock with the ISS?",
    answers: ["Cygnus", "Dragon", "Starliner", "Dream Chaser"],
    correctAnswerIndex: 1,
  },
  {
    question:
      "Which country's module serves as the ISS's primary living quarters and early power source?",
    answers: ["United States", "Japan", "Russia", "Canada"],
    correctAnswerIndex: 2,
  },
  {
    question: "What robotic arm on the ISS was provided by Canada?",
    answers: ["RMS", "Canadarm2", "JEMRMS", "ERA"],
    correctAnswerIndex: 1,
  },
  {
    question: "How long is a typical astronaut expedition aboard the ISS?",
    answers: ["1 month", "6 months", "1 year", "3 months"],
    correctAnswerIndex: 1,
  },
  {
    question:
      "Which astronaut holds the record for the most total days in space (as of the ISS era)?",
    answers: [
      "Scott Kelly",
      "Oleg Kononenko",
      "Peggy Whitson",
      "Mark Vande Hei",
    ],
    correctAnswerIndex: 1,
  },

  // Artemis Program
  {
    question: "What is the primary goal of NASA's Artemis program?",
    answers: [
      "Build a permanent base on Mars",
      "Return humans to the Moon and establish a sustainable presence",
      "Launch a crewed mission to an asteroid",
      "Deploy the next generation space telescope",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "What rocket is used for NASA's Artemis missions?",
    answers: [
      "Falcon Heavy",
      "Space Launch System (SLS)",
      "New Glenn",
      "Vulcan Centaur",
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      "What is the name of the crew capsule used in the Artemis program?",
    answers: ["Dragon", "Starliner", "Orion", "Dream Chaser"],
    correctAnswerIndex: 2,
  },
  {
    question:
      "What is the name of the lunar Gateway station planned as part of the Artemis program?",
    answers: [
      "Lunar Outpost",
      "Gateway",
      "Artemis Base Camp",
      "Lunar Orbital Platform",
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      "Which company was selected to build the Human Landing System (HLS) for Artemis?",
    answers: ["Blue Origin", "Boeing", "SpaceX", "Lockheed Martin"],
    correctAnswerIndex: 2,
  },
  {
    question:
      "Artemis 1 was an uncrewed test flight. What did it primarily test?",
    answers: [
      "The lunar lander descent stage",
      "The SLS rocket and Orion capsule around the Moon",
      "The Gateway station docking system",
      "Deep space communication arrays",
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      "Which lunar region is targeted for the Artemis crewed landing missions?",
    answers: [
      "Mare Tranquillitatis",
      "The South Pole",
      "Oceanus Procellarum",
      "Mare Imbrium",
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      "What resource found at the lunar south pole is a key reason NASA targets that region?",
    answers: ["Helium-3", "Iron ore", "Water ice", "Titanium"],
    correctAnswerIndex: 2,
  },

  // Space Shuttle Program
  {
    question: "What was the name of the first Space Shuttle to fly in space?",
    answers: ["Challenger", "Discovery", "Columbia", "Atlantis"],
    correctAnswerIndex: 2,
  },
  {
    question:
      "In what year did the Space Shuttle program's first mission (STS-1) launch?",
    answers: ["1977", "1983", "1981", "1979"],
    correctAnswerIndex: 2,
  },
  {
    question: "How many Space Shuttle orbiters were built for spaceflight?",
    answers: ["4", "6", "5", "3"],
    correctAnswerIndex: 2,
  },
  {
    question:
      "Which Space Shuttle was lost during re-entry on February 1, 2003?",
    answers: ["Challenger", "Discovery", "Atlantis", "Columbia"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Which Space Shuttle was destroyed during launch on January 28, 1986?",
    answers: ["Columbia", "Challenger", "Endeavour", "Atlantis"],
    correctAnswerIndex: 1,
  },
  {
    question: "What was the final mission of the Space Shuttle program?",
    answers: ["STS-133", "STS-135", "STS-130", "STS-132"],
    correctAnswerIndex: 1,
  },
  {
    question:
      "Which Space Shuttle launched and deployed the Hubble Space Telescope in 1990?",
    answers: ["Atlantis", "Columbia", "Endeavour", "Discovery"],
    correctAnswerIndex: 3,
  },
  {
    question: "What year did the Space Shuttle program officially end?",
    answers: ["2009", "2013", "2011", "2010"],
    correctAnswerIndex: 2,
  },
  {
    question: "Which Space Shuttle was built as a replacement for Challenger?",
    answers: ["Discovery", "Atlantis", "Enterprise", "Endeavour"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "What was the primary component of the Space Shuttle that was reused after each flight?",
    answers: [
      "The external tank",
      "The solid rocket boosters",
      "The orbiter",
      "The main engines only",
    ],
    correctAnswerIndex: 2,
  },

  // Solar System
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Saturn", "Neptune", "Jupiter", "Uranus"],
    correctAnswerIndex: 2,
  },
  {
    question: "How many planets are in our solar system?",
    answers: ["9", "7", "8", "10"],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the closest planet to the Sun?",
    answers: ["Venus", "Earth", "Mars", "Mercury"],
    correctAnswerIndex: 3,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Jupiter", "Mars", "Venus", "Saturn"],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the name of the largest moon of Saturn?",
    answers: ["Ganymede", "Europa", "Titan", "Io"],
    correctAnswerIndex: 2,
  },
  {
    question: "Which planet has the most moons in our solar system?",
    answers: ["Jupiter", "Neptune", "Uranus", "Saturn"],
    correctAnswerIndex: 3,
  },
  {
    question: "What is the hottest planet in our solar system?",
    answers: ["Mercury", "Mars", "Jupiter", "Venus"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "What is the name of the largest volcano in the solar system, located on Mars?",
    answers: ["Olympus Mons", "Maxwell Montes", "Elysium Mons", "Arsia Mons"],
    correctAnswerIndex: 0,
  },
  {
    question:
      "Which planet rotates on its side with an axial tilt of about 98 degrees?",
    answers: ["Neptune", "Saturn", "Uranus", "Pluto"],
    correctAnswerIndex: 2,
  },
  {
    question:
      "What is the name of the region beyond Neptune's orbit where many comets originate?",
    answers: [
      "The Asteroid Belt",
      "The Van Allen Belt",
      "The Oort Cloud",
      "The Kuiper Belt",
    ],
    correctAnswerIndex: 2,
  },
];
