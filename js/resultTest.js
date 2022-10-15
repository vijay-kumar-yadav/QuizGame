$(document).ready(() => {
    if (!JSON.parse(sessionStorage.getItem("showResult"))) {
        $("body").css("filter", "blur(8px)");
        setTimeout(() => {
            alert("Invalid Entry");
            location.href = "./index.html";
        }, 1000);
    } else {
        sessionStorage.setItem("showResult", false);
    }
});
$("#MarksObtained").text(
    isNaN(sessionStorage.getItem("YourScore"))
        ? 0
        : sessionStorage.getItem("YourScore")
);
$("#MarksMax").text(sessionStorage.getItem("totalQues"));

//answer attempted
function quesSkeleton(questionNo, question, options, correctIndex) {
    // opt=option
    var points = 0;
    var answerAttempted = sessionStorage
        .getItem("answerAttempted")
        .split(",");
    console.log(correctIndex, answerAttempted[questionNo]);
    $("#result").attr("class", "container");
    var tDiv = $("<div></div>").attr("id", "timerDiv");
    var tP = $("<h2></h2>").attr("id", "timer").addClass(" text-center");
    tDiv.append(tP);
    var bDiv = $("<div></div")
        .addClass("border")
        .attr("id", "border" + questionNo);
    var bgColor = "bg-info";
    if (answerAttempted[questionNo] == correctIndex) {
        bgColor = "bg-success";
        points = 1;
    } else if (answerAttempted[questionNo] < 4) {
        bgColor = "bg-danger";
        points = 0;
    } else {
        bgColor = "bg-secondary";
        points = 0;
    }
    var quizDiv = $("<div></div>").attr(
        "class",
        "  p-3 border-bottom " + bgColor
    );
    var quizNameDiv = $("<div></div>").attr(
        "class",
        "d-flex flex-row justify-content-between align-items-center"
    );
    var quizNameH = $("<h4></h4>").text("Marks: " + points);
    if (points == 0) {
        quizNameH.text(" Answer: " + options[correctIndex]);
    }
    var quizNumberSpan = $("<span></span>").text(
        questionNo + 1 + " of " + totalQues
    );
    quizNameDiv.append(quizNameH, quizNumberSpan);
    quizDiv.append(quizNameDiv);
    var qaDiv = $("<div></div>")
        .attr("id", "quesAnsDiv" + questionNo)
        .addClass("bg-white p-3 border-bottom ");
    var qDiv = $("<div></div>")
        .attr("id", "quesDiv")
        .addClass("d-flex flex-row align-items-center question-title");
    var quesSymbol = $("<h3></h3>").addClass("text-danger").text("Q.");
    // console.log(question);
    var quesH = $("<H5></H5>")
        .attr("id", "ques" + questionNo)
        .addClass("mt-1 ml-2")
        .text(question);
    qDiv.append(quesSymbol, quesH);
    var aDiv = $("<div></div>").attr("id", "ansDiv").addClass("ans ml-2");
    // console.log(answerAttempted);

    for (let k = 0; k < options.length; k++) {
        var lb = $("<label></label>").addClass("radio");
        var aI = $("<input/>")
            .attr("name", questionNo)
            .attr("type", "radio")
            .attr("value", k);
        // console.log(k);
        aI.attr("disabled", "disable");
        if (k == answerAttempted[questionNo]) aI.attr("checked", true);
        var optionSpan = $("<span></span>").text(options[k]);
        lb.append(aI, optionSpan);
        aDiv.append(lb);
    }
    qaDiv.append(qDiv, aDiv);
    bDiv.append(quizDiv, qaDiv);
    $("#result").append(tDiv, bDiv);

}
let mcq = JSON.parse(sessionStorage.getItem("mcq"));
var totalQues = mcq.questions.length;
mcq = mcq.questions;
console.log(mcq);

for (let i = 0; i < totalQues; i++) {
    quesSkeleton(i, mcq[i].question, mcq[i].answers, mcq[i].correctIndex);
}
function onHomeClick() {
    let resultArr = [];
    sessionStorage.setItem("resultShow", false);
    sessionStorage.clear();
    location.href = "./index.html";
}