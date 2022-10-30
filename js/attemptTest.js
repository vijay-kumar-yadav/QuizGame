var unLoadFlag = true;
var total = 0;
$(document).ready(() => {
    if (!JSON.parse(sessionStorage.getItem("TestStart"))) {
        $("body").css("filter", "blur(3px)");
        setTimeout(() => {
            alert("Invalid Entry");
            sessionStorage.clear();
            location.href = "./index.html";
        }, 1000);
    } else {
        sessionStorage.setItem("showResult", true);
        sessionStorage.setItem("TestStart", false);
    }
});

var result = {};
// var amount = "" + sessionStorage.getItem("numberOfQuestion");
// var difficulty = "easy";
// var testType = sessionStorage.getItem("TestType");
// https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple
// let mcq =
//   "https://opentdb.com/api.php?amount=" +
//   amount +
//   "&category=" +
//   testType +
//   "&difficulty=" +
//   difficulty +
//   "&type=multiple";
// console.log(mcq);
function setProgressBarPropety(quesNumber) {

    total = ((quesNumber) / totalQues) * 100
    $(".racingCar").css("left", "" + (total) + "%");
    $(".progressBarRace").width("" + (total) + "%");
    console.log(total)
    if (quesNumber == totalQues) {
        $(".racingCar").attr("src", "./images/wonRace.png").css("left", "50%").css("top", "-22px").css("height", "35px").css("width", "55px")
    }
}
function quesSkeleton(questionNo, question, options) {

    // opt=option
    // <div class="timer">
    //         <div class="time_left_txt">Time Left</div>
    //         <div class="timer_sec">15</div>
    //     </div>
    var tDivParent = $("<div></div>").attr("class", "timerPar");
    var tDivText = $("<div></div>")
        .attr("class", "time_left_txt")
        .text("Time Left");
    var tP = $("<div></div>").attr("id", "timer").addClass("text-center");
    tDivParent.append(tDivText, tP);
    // tDiv.append(tP);
    // tDivParent.append(tDiv);
    var bDiv = $("<div></div")
        .addClass("border")
        .attr("id", "border" + questionNo);

    var quizDiv = $("<div></div>").attr(
        "class",
        " bg-white p-3 border-bottom "
    );
    var quizNameDiv = $("<div></div>").attr(
        "class",
        "d-flex flex-row justify-content-between align-items-center"
    );
    var nameOfQuiz = sessionStorage.getItem("QuizName");
    var quizNameH = $("<h4></h4>").text(
        nameOfQuiz.replace("_", " ") + " Quiz"
    );
    // var quizNumberSpan = $("<span></span>").text(
    //   questionNo + 1 + " of " + totalQues
    // );

    var progressBarDiv = $("<div></div>").attr("class", "progress  mt-2");
    var progressBar = $("<div></div>")
        .attr("class", "progress-bar bg-primary ")
        .attr("role", "progressbar")
        .css("width", "100%");
    progressBarDiv.append(progressBar);
    //progress bar end
    quizNameDiv.append(quizNameH, tDivParent);
    quizDiv.append(quizNameDiv, progressBarDiv);
    var qaDiv = $("<div></div>")
        .attr("id", "quesAnsDiv" + questionNo)
        .css("min-height", "35vh")
        .css("min-width", "80vw")
        .addClass(" p-3 border-bottom bg-white");
    //running man progress bar animation here

    setProgressBarPropety(questionNo + 1)
    //ends here
    var qDiv = $("<div></div>")
        .attr("id", "quesDiv")
        .addClass("d-flex flex-row  align-items-center question-title");
    var quesSymbol = $("<h3></h3>")
        .addClass("text-danger")
        .text("Q" + (questionNo + 1) + ".");
    var quesH = $("<H5></H5>")
        .attr("id", "ques" + questionNo)
        .addClass("mt-1 ml-2")
        .text(question);
    qDiv.append(quesSymbol, quesH);
    var aDiv = $("<div></div>")
        .attr("id", "ansDiv")
        .addClass("row mx-2 mt-5");

    for (let k = 0; k < options.length; k++) {
        var optionLbDiv = $("<div></div>").attr(
            "class",
            " col-md-6 col-sm-12 p-1"
        );
        var optionlb = $("<label></label>")
            .addClass(" btn btn-outline-primary w-100")
            .attr("id", "optionlb" + k);
        var aI = $("<input/>")
            .attr("name", questionNo)
            .attr("type", "radio")
            .attr("value", k)
            .attr("id", "input" + k)
            .css("visibility", "hidden");

        aI.change((event) => {
            console.log("clicked");
            for (let i = 0; i < options.length; i++) {
                $("#optionlb" + i).removeClass("btn-primary");
                $("#optionlb" + i).addClass("btn-outline-primary");
            }
            $("#optionlb" + k).addClass("btn-primary");
            $("#optionlb" + k).removeClass("btn-outline-primary");

            result[questionNo] = event.target.value;
        });

        var optionSpan = $("<span></span>").text(options[k]);
        optionlb.append(aI, optionSpan);
        optionLbDiv.append(optionlb);
        aDiv.append(optionLbDiv);
    }
    // <div class="d-flex justify-content-center quitSubmit">
    //   <button class="btn btnQuiz bg-success" onclick="onNextClick()">
    //     Next
    //   </button>
    // </div>
    var nextSubmitBtnDiv = $("<div></div>").attr(
        "class",
        "d-flex justify-content-between"
    );
    var nextBtn = $("<button></button>")
        .attr("class", " btn btn-success w-25")
        .css("border-radius", "10px")
        .click(() => onNextClick())
        .text("Next");
    var submitBtn = $("<button></button>")
        .attr("class", " btn btn-primary w-25")
        .css("border-radius", "10px")
        .click(() => onSubmitClick())
        .text("Submit");
    if ((questionNo + 1) == totalQues) {
        nextBtn.hide()
    }
    nextSubmitBtnDiv.append(submitBtn, nextBtn);

    qaDiv.append(qDiv, aDiv, nextSubmitBtnDiv);
    bDiv.append(quizDiv, qaDiv);
    $("#quiz").append(bDiv);

}
//slideshow
var intr;
var totalQues;
var timeBTWques = 30;
var perQuesTime = timeBTWques * 1000;
var totalTime;
var count = timeBTWques;
var quesNumber = 0;
var ques = 0;
function start(ques) {
    // console.log(ques);
    quesSkeleton(
        quesNumber,
        ques[quesNumber].question,
        ques[quesNumber].answers
    );
    // nextButton.click(() => {
    //     $("#quesAnsDiv" + quesNumber).remove();
    //   });
    intr = setInterval(() => startSlideshow(ques), 1000);
}
function alertMessage(msg, msgTime) {
    $(".alert").addClass("show").text(msg);
    $(".alert").removeClass("hide");
    $(".alert").addClass("showAlert");
    setTimeout(function () {
        $(".alert").removeClass("show");
        $(".alert").addClass("hide");
    }, msgTime);
}
function calculateResult(resultArr, correctAnswers) {
    let marks = totalQues;
    sessionStorage.setItem("answerAttempted", resultArr);

    resultArr.map((e, index) => {
        if (e != correctAnswers[index]) {
            --marks;
        }
    });
    // console.log("marks", marks);
    return marks;
}
function checkAnswerAttemptedAlert(quesNo) {
    if (result[quesNo - 1] != 4) {
        $(".alert").removeClass("alert-info");
        $(".alert").addClass("alert-success");
        alertMessage("Your Answer Saved!", 1000);
    } else {
        $(".alert").removeClass("alert-success");
        $(".alert").addClass("alert-info");
        alertMessage("Answer Saved Automatically!", 1000);
    }
}
function submitQuizResult() {
    // console.log("your result", result);
    unLoadFlag = false;
    $(".quitSubmit").remove();
    $("header").hide();
    $(".racingCar").hide();
    let resultArr = [];
    for (let key in result) resultArr.push(result[key]);
    var correctAnswers = [];
    for (let i = 0; i < totalQues; i++) {
        correctAnswers.push(ques[i].correctIndex);
    }

    sessionStorage.setItem(
        "YourScore",
        calculateResult(resultArr, correctAnswers)
    );
    // console.log(typeof sessionStorage.getItem("answers"));

    clearInterval(intr);
    sessionStorage.setItem("TestStart", false);
    $("#quiz").hide();
    $(".racingCar").hide();

    $(".alert").addClass("alert-primary");

    alertMessage("Calculating your result wait", 2800);
    location.href = "./resultTest.html";
    // setTimeout(() => {
    // }, 3000);
}
function startSlideshow(ques) {
    if (count == 0) {
        count = timeBTWques;
        $("#border" + quesNumber).remove();
        // console.log(quesNumber);
        quesNumber++;
        if (quesNumber < totalQues) {
            quesSkeleton(
                quesNumber,
                ques[quesNumber].question,
                ques[quesNumber].answers
            );
        }
        checkAnswerAttemptedAlert(quesNumber);
        if (quesNumber == totalQues) {
            submitQuizResult();
        }
    }
    $("#timer").text(count);
    let progress = Math.trunc((count / 30) * 100);
    // console.log(progress);
    $(".progress-bar").css("width", "" + progress + "%");
    if (progress > 25 && progress <= 50)
        $(".progress-bar").addClass("bg-warning");

    if (progress <= 25) $(".progress-bar").addClass("bg-danger");

    count--;
}
//on next click
function onNextClick() {
    if (quesNumber >= totalQues) return;
    console.log("clicked" + " " + quesNumber + " " + totalQues);
    count = timeBTWques;
    $("#border" + quesNumber).remove();

    quesNumber++;
    if (quesNumber < totalQues) {
        quesSkeleton(
            quesNumber,
            ques[quesNumber].question,
            ques[quesNumber].answers
        );
    }
    checkAnswerAttemptedAlert(quesNumber);
    if (quesNumber == totalQues) submitQuizResult();

    // console.log(quesNumber);
}

//convert online api response to my api response
function shuffleOptions(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex].replace("&#039;", "'").replace("&#039;s", "'"),
            array[currentIndex]
                .replace("&#039;", "'")
                .replace("&#039;", "'")
                .replace("&#039;s", "'")
                .replace("&#039;s", "'")
                .replace("&AMP;", "&")
                .replace("&AMP;", "&")
                .replace("&amp;", "&")
                .replace("&amp;", "&")
                .replace("&quot;", '"')
                .replace("&quot;", '"'),
        ];
    }

    return array;
}

function convertApi(responseObject) {
    var myResponse = {
        questions: [],
    };
    for (let res of responseObject.results) {
        // console.log(res);
        var options = shuffleOptions([
            res.correct_answer,
            ...res.incorrect_answers,
        ]);
        myResponse.questions.push({
            question: res.question
                .replace("&quot;", '"')
                .replace("&quot;", '"')
                .replace("&#039;", "'")
                .replace("&#039;", "'")
                .replace("&#039;s", "'")
                .replace("&#039;s", "'")
                .replace("&AMP;", "&")
                .replace("&AMP;", "&")
                .replace("&amp;", "&")
                .replace("&amp;", "&"),
            answers: options,
            correctIndex: options.indexOf(res.correct_answer),
        });
    }
    sessionStorage.setItem("mcq", JSON.stringify(myResponse));
    console.log(JSON.parse(sessionStorage.mcq));
    return myResponse;
}
function getFetchMcq() {
    const data = JSON.parse(sessionStorage.getItem("mcqData"));
    console.log(data);
    ques = convertApi(data).questions;
    totalQues = ques.length;
    sessionStorage.setItem("totalQues", totalQues);
    totalTime = totalQues * perQuesTime;
    // let tempArr = [];
    let maxOptions = 0;
    for (let i = 0; i < totalQues; i++) {
        maxOptions = Math.max(maxOptions, ques[i].answers.length);
    }
    // console.log(maxOptions);
    for (let i = 0; i < totalQues; i++) {
        result[i] = maxOptions;
        // tempArr[i] = maxOptions;
    }
    // sessionStorage.setItem("QuizName", tempArr);
    $(".quitSubmit").css("visibility", "visible");
    start(ques);
}
getFetchMcq();
function onSubmit() {
    unLoadFlag = false;
    sessionStorage.setItem("resultShow", true);
    sessionStorage.setItem("TestStart", false);
    $(".quitSubmit").css("visibility", "hidden");

    let resultArr = [];
    for (let key in result) resultArr.push(result[key]);
    var correctAnswers = [];
    for (let i = 0; i < totalQues; i++) {
        correctAnswers.push(ques[i].correctIndex);
    }

    if (totalQues != quesNumber)
        sessionStorage.setItem(
            "YourScore",
            calculateResult(resultArr, correctAnswers)
        );
    clearInterval(intr);
    $("#quiz").hide();
    $(".alert").addClass("alert-primary");
    alertMessage("Calculating your result wait", 2800);
    location.href = "./resultTest.html";
    // setTimeout(() => {
    // }, 3000);
}
function onExit() {
    $(".quitSubmit").css("visibility", "hidden");

    let resultArr = [];
    sessionStorage.setItem("resultShow", false);
    sessionStorage.clear();
    for (let key in result) resultArr.push(result[key]);
    if (totalQues != quesNumber)
        sessionStorage.setItem("QuizName", resultArr);
    location.href = "./index.html";
}
function onExitClick() {
    confirm_dialog(
        "Exit Confirmation",
        "<p>Are you sure you want to exit?</p>",
        "onExit"
    );
}
function onSubmitClick() {
    confirm_dialog(
        "Submit Confirmation",
        "<p>Are you sure you want to submit?</p>",
        "onSubmit"
    );
}
function onRequestFullScreenClick() {
    if (
        (document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(
                Element.ALLOW_KEYBOARD_INPUT
            );
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

window.addEventListener("resize", (evt) => {
    if (window.innerHeight == screen.height) {
        $(".fullscreenToggleBtn").attr("src", "./images/fullscreen_off.png");

        console.log("FULL SCREEN");
    } else {
        $(".fullscreenToggleBtn").attr("src", "./images/fullscreen.png");
        console.log("NORMAL SCREEN");
    }
});
function onunload() {
    if (unLoadFlag) sessionStorage.clear();
}