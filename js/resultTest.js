var flag = JSON.parse(sessionStorage.getItem("checkResultHistory"))
window.onbeforeunload = function () {
    sessionStorage.setItem("checkResultHistory", false)
}
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
var checkRecentActivity = JSON.parse(sessionStorage.getItem("checkRecentActivity"));
function getMarks() {
    // let totalMarks = sessionStorage.getItem("totalQues");
    let obtainedMarks = sessionStorage.getItem("YourScore");
    let lowMarks = Math.trunc(obtainedMarks * 0.2)
    let mediumMarks = Math.trunc(obtainedMarks * 0.6);
    // let highMarks = Math.trunc(obtainedMarks * .7);

    if (isNaN(obtainedMarks) || obtainedMarks == 0) {
        obtainedMarks = 0;
        $("#MarksObtained").addClass("text-danger");
    } else if (obtainedMarks == lowMarks) {
        $("#MarksObtained").addClass("text-danger");
    } else if (obtainedMarks > lowMarks && obtainedMarks <= mediumMarks) {
        $("#MarksObtained").addClass("text-warning");
    } else {
        $("#MarksObtained").addClass("text-success");
    }



    return obtainedMarks;
}

//answer attempted
function quesSkeleton(questionNo, question, options, correctIndex, answerAttempted) {
    // opt=option
    var points = 0;
    // console.log(correctIndex, answerAttempted[questionNo]);
    $("#result").attr("class", "container");
    // var tDiv = $("<div></div>").attr("id", "timerDiv");
    // var tP = $("<h2></h2>").attr("id", "timer").addClass(" text-center");
    // tDiv.append(tP);
    var bDiv = $("<div></div")
        .addClass("border ")
        .attr("id", "border" + questionNo).css("border-top-right-radius", "50px");
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
    ).css("border-top-right-radius", "50px");
    var quizNameDiv = $("<div></div>").attr(
        "class",
        "d-flex flex-row justify-content-between align-items-center"
    );
    var quizNameH = $("<h4></h4>").text("Marks: " + points).addClass("text-white");
    if (points == 0) {
        quizNameH.text(" Answer: " + options[correctIndex]).addClass("text-white");
    }
    // var quizNumberSpan = $("<span></span>").text(
    //     questionNo + 1 + " of " + totalQues
    // );
    quizNameDiv.append(quizNameH);
    quizDiv.append(quizNameDiv);
    var qaDiv = $("<div></div>")
        .attr("id", "quesAnsDiv" + questionNo)
        .addClass("bg-white p-3 border-bottom ");
    var qDiv = $("<div></div>")
        .attr("id", "quesDiv")
        .addClass("d-flex flex-row align-items-center question-title");
    var quesSymbol = $("<h3></h3>").addClass("text-danger").text("Q" + (questionNo + 1) + ".");
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
    $("#result").append(bDiv);

}
let mcq = JSON.parse(sessionStorage.getItem("mcq"));
console.log(mcq);
mcq = mcq.questions;
var totalQues = mcq.length;
var answerAttempted;
$("#MarksObtained").text(() => getMarks());
$("#MarksMax").text(totalQues).addClass("text-white");

if (!checkRecentActivity)
    answerAttempted = sessionStorage
        .getItem("answerAttempted")
        .split(",");
else
    answerAttempted = sessionStorage
        .getItem("answerAttempted");
// console.log(mcq);
var questionsList = []
var optionsList = []
var correctAnsIndexList = []
for (let i = 0; i < totalQues; i++) {
    let question = mcq[i].question;
    let options = mcq[i].answers;
    let correctAnsIndex = mcq[i].correctIndex;
    quesSkeleton(i, question, options, correctAnsIndex, answerAttempted);
    questionsList.push(question)
    optionsList.push(options)
    correctAnsIndexList.push(correctAnsIndex);
    if (!checkRecentActivity && flag) {
        if (totalQues == (i + 1))
            saveHistoryToLocalStorage();
        console.log("recent ")
    }
}
//saving in local storage for results history
function saveHistoryToLocalStorage() {
    let quizName = sessionStorage.getItem("QuizName");
    let resultsHistory = {
        question: questionsList,
        options: optionsList,
        correctAnsIndexList: correctAnsIndexList,
        answerAttemptedList: answerAttempted,
        quizName: quizName
    }
    let resultsHistoryList = localStorage.getItem("resultsHistory");

    resultsHistoryList = JSON.parse(resultsHistoryList);
    resultsHistoryList.push(resultsHistory)
    if (resultsHistoryList.length > 10) {
        resultsHistoryList.shift();
    }
    console.log(resultsHistoryList)
    resultsHistoryList = JSON.stringify(resultsHistoryList)
    localStorage.setItem("resultsHistory", resultsHistoryList);
}

function onHomeClick() {
    let resultArr = [];
    sessionStorage.setItem("resultShow", false);
    sessionStorage.clear();
    location.href = "./index.html";
}



//scroll animation
// console.log("hi");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el, i) => { observer.observe(el) });


function pdfDown() {
    let answerAttempted = sessionStorage
        .getItem("answerAttempted")
        .split(",");
    let quizName = sessionStorage.getItem("QuizName");
    var dd = {
        // watermark: 'Quiz Results',
        // background: 'simple text',
        // a string or { width: number, height: number }
        pageSize: 'A4',
        info: {
            title: "" + quizName
        },
        content: [
            { text: quizName, style: "header" }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
            },
            subheader: {
                fontSize: 15,
                bold: true,
            },
            quote: {
                italics: true,
            },
            small: {
                fontSize: 8,
            },
        },
    };
    let i = 1;

    for (let t of mcq) {
        let yourAns = t.answers[answerAttempted[i - 1]];
        console.log(answerAttempted[i - 1])
        dd.content.push(
            {
                text: "Q" + i + ": " + t.question,
                style: "subheader",
            },
            "Correct Ans: " + t.answers[t.correctIndex] + "\n" + "Your Ans: " + (answerAttempted[i - 1] != 4 ? yourAns : "") + "\n\n"
        );
        i++;

    }
    // console.log(dd.content);
    pdfMake.createPdf(dd).download('' + quizName + "QuizResult");
}
window.onhashchange = function () {
    alert("wait")
}