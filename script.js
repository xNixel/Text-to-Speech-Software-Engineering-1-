/*--------------------
    TEXT TO SPEECH  
--------------------*/

// Initialize new SpeechSynthesisUtterance
let speech = new SpeechSynthesisUtterance();

//Set Speech Language
speech.lang = "en";

//Initialize Instructions
var instructionsTTS = $('#instructions-tts');

/*--------------------
      App buttons  
--------------------*/

// function for "PLAY" button
document.querySelector("#play").addEventListener("click", () => {
    //Set the text property with the value of the text area
    speech.text = document.querySelector("textarea").value;

    //Start Speaking
    window.speechSynthesis.speak(speech);

    //Changes the instruction depending to the functionality
    instructionsTTS.text('Speech Synthesizer Activated.');
});



// function for "PAUSE" button
document.querySelector("#pause").addEventListener("click", () => {
    // Pause the speecheSynthesis instance
    window.speechSynthesis.pause();

    //Changes the instruction depending to the functionality
    instructionsTTS.text('Speech Synthesizer Paused.');
})

// function for "RESUME" button
document.querySelector("#resume").addEventListener("click", () => {
    // Resume the paused speecheSynthesis instance
    window.speechSynthesis.resume();

    //Changes the instruction depending to the functionality
    instructionsTTS.text('Speech Synthesizer Resumes.');
})

// function for "STOP" button
document.querySelector("#stop").addEventListener("click", () => {
    // Cancel/Stop speecheSynthesis instance
    window.speechSynthesis.cancel();

    //Changes the instruction depending to the functionality
    instructionsTTS.text('Speech Synthesizer Stopped.');
})


/*----------------------------------------------------------------------*/

/*--------------------
    SPEECH TO TEXT
--------------------*/

try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
} catch (e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
}

var noteTextarea = $('#text-area');
var instructionsSTT = $('#instructions-stt');

var noteContent = '';

/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {

    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    var current = event.resultIndex;

    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;

    // Add the current transcript to the contents of our Note.
    // There is a weird bug on mobile, where everything is repeated twice.
    // There is no official solution so far so we have to handle an edge case.
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

    if (!mobileRepeatBug) {
        noteContent += transcript;
        noteTextarea.val(noteContent);
    }
};

//Changes the instruction depending to the functionality
recognition.onstart = function() {
    instructionsSTT.text('Voice recognition activated. Try speaking into the microphone.');
}

//Changes the instruction depending to the functionality
recognition.onspeechend = function() {
    instructionsSTT.text('You were quiet for a while so voice recognition turned itself off.');
}

//Changes the instruction depending to the functionality
recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
        instructionsSTT.text('No speech was detected. Try again.');
    };
}

/*-----------------------------
      App buttons and input 
------------------------------*/

// function for "RECORD" button
$('#record').on('click', function(e) {
    if (noteContent.length) {
        noteContent += ' ';
    }
    recognition.start();
});

// function for "STOP" button
$('#stopspeech').on('click', function(e) {
    recognition.stop();

    //Changes the instruction depending to the functionality
    instructionsSTT.text('Voice recognition stopped.');
});

// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
    noteContent = $(this).val();
})

/*-----------------------------
      Speech Synthesis 
------------------------------*/

function readOutLoud(message) {
    var speech = new SpeechSynthesisUtterance();

    // Set the text and voice attributes.
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 3;

    window.speechSynthesis.speak(speech);
};

// Function to Zoom Text [TTS]
    var fontSize = 1.5;
    function zoomIn() {
        fontSize += 0.1;
        document.getElementById("text").style.fontSize = fontSize + "em";
    }
    function zoomOut() {
        fontSize -= 0.1;
        document.getElementById("text").style.fontSize = fontSize + "em";
    }

// Function to Zoom Text [TTS]
    function zoomin() {
        fontSize += 0.1;
        document.getElementById("text-area").style.fontSize = fontSize + "em";
    }
    function zoomout() {
        fontSize -= 0.1;
        document.getElementById("text-area").style.fontSize = fontSize + "em";
    }


