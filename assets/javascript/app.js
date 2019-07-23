var card = $("#quiz-area");
var preguntas = [
    {
        pregunta: "What happens when you take mix an avacoado with rock and roll?",
        respuestas: ["Molotov", "Panda", "Botellita de Jerez", "The Lion King"],
        respuestaCorecta: "Botellita de Jerez"
    },
    {
        pregunta: "Which one of thesse is not a Mexican god?",
        respuestas: ["Quetzalcoatl ", "Tlaltechutli", "Huitzilopochtli", "Huitlacoche"],
        respuestaCorecta: "Huitlacoche"
    },
    {
        pregunta: "What is the nahuatl name for corn smut?",
        respuestas: ["Huitlacoche", "Maiz", "Elote", "Huitzilopochtli"],
        respuestaCorecta: "Huitlacoche"
    },
    {
        pregunta: "Which ancient Mexican city was founded by witnessing an eagle devoure a snake on top of a cactus?",
        respuestas: ["Chiapas", "Tenochtitlan", "Guanajuato", "El Dorado"],
        respuestaCorecta: "Tenochtitlan"
    },
    {
        pregunta: "Whats the name of the cartoon cricket that disney wanted to buy from Francisco Gabilondo Soler?",
        respuestas: ["Cri-Kee", "Jiminy", "El Chapulin Colorado", "Cri Cri"],
        respuestaCorecta: "Cri Cri"
    },
    {
        pregunta: "When is Mexican independance day?",
        respuestas: ["July 4th", "September 15th", "May 5th", "September 16th"],
        respuestaCorecta: "September 16th"
    },
    {
        pregunta: "When is the the day of the cry at Dolores celebrated in Mexico?(The day the Mexican revolution started.)",
        respuestas: ["July 4th", "September 15th", "May 5th", "September 16th"],
        respuestaCorecta: "September 15th"
    },
    {
        pregunta: "When is the battle of Puebla celabrated?(The Mexican army won against the french)",
        respuestas: ["July 4th", "September 15th", "May 5th", "September 16th"],
        respuestaCorecta: "May 5th"
    }
];
var timer;
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#sub-wrapper").prepend(
            "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
        );
        $("#start").remove();
        for (var i = 0; i < preguntas.length; i++) {
            card.append("<h2>" + preguntas[i].pregunta + "</h2>");
            for (var j = 0; j < preguntas[i].respuestas.length; j++) {
                card.append("<input type='radio' name='pregunta" + i +
                    "' value='" + preguntas[i].respuestas[j] + "''>" + preguntas[i].respuestas[j]);
            }
        }
        card.append("<button id='done'>Done</button>");
    },
    done: function () {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === preguntas[i].respuestaCorecta) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $("#sub-wrapper h2").remove();
        card.html("<h2>All Done!</h2>");
        card.append("<h3>Right Answers: " + this.correct + "</h3>");
        card.append("<h3>Wrong Answers: " + this.incorrect + "</h3>");
    }
};
$(document).on("click", "#start", function () {
    game.start();
});
$(document).on("click", "#done", function () {
    game.done();
});