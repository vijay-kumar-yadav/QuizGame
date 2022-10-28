sessionStorage.setItem("checkResultHistory", true);
// eventlistener on resize
function resize() {
    let size = window.innerWidth;
    if (size <= 992) {
        $(".homeNav").hide()
    } else {
        $(".homeNav").show()
    }
}

window.onresize = () => {


    resize()
}
resize()
var testType = {
    Books: 10,
    Film: 11,
    Music: 12,
    // "Entertainment:_Musicals_&_Theatres": 13,
    Television: 14,
    Video_Games: 15,
    Board_Games: 16,
    Comics: 29,
    Nature: 17,
    Computers: 18,
    Gadgets: 30,
    Mathematics: 19,
    Mythology: 20,
    General_Knowledge: 9,
    Sports: 21,
    Geography: 22,
    History: 23,
    Politics: 24,
    Art: 25,
    Celebrities: 26,
    Animals: 27,
    Vehicles: 28,
};
var testTypeSearch = {}
const imageLinks = {
    "Books": "https://images.unsplash.com/photo-1608659597669-b45511779f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxCb29rc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Film": "https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxGaWxtfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Music": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxNdXNpY3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Television": "https://images.unsplash.com/photo-1593784991095-a205069470b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxUZWxldmlzaW9ufGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Video_Games": "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxWaWRlbyUyMEdhbWVzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Video": "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxWaWRlbyUyMEdhbWVzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Board_Games": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxCb2FyZCUyMEdhbWVzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Board": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxCb2FyZCUyMEdhbWVzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Comics": "https://images.unsplash.com/photo-1607823477522-177cff8183d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxDb21pY3N8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Nature": "https://images.unsplash.com/photo-1657214059157-dd0e35b13f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MXwxfHNlYXJjaHwxfHxOYXR1cmV8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Computers": "https://images.unsplash.com/photo-1629654291663-b91ad427698f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxDb21wdXRlcnN8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Gadgets": "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxHYWRnZXRzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Mathematics": "https://images.unsplash.com/photo-1528838059403-95f01420989b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxNYXRoZW1hdGljc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Mythology": "https://images.unsplash.com/photo-1543502708-eb29f9b35f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxNeXRob2xvZ3l8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "General_Knowledge": "https://images.unsplash.com/photo-1591010591040-cbaf98b9b924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxHZW5lcmFsJTIwS25vd2xlZGdlfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "General": "https://images.unsplash.com/photo-1591010591040-cbaf98b9b924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxHZW5lcmFsJTIwS25vd2xlZGdlfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Sports": "https://images.unsplash.com/photo-1601259501461-9a6b562b2728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxTcG9ydHN8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Geography": "https://images.unsplash.com/photo-1578589315522-9e5521b9c158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxHZW9ncmFwaHl8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "History": "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxIaXN0b3J5fGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Politics": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxQb2xpdGljc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Art": "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MXwxfHNlYXJjaHwxfHxBcnR8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Celebrities": "https://images.unsplash.com/photo-1609741199878-3e8ebdb1dbc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxDZWxlYnJpdGllc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Animals": "https://images.unsplash.com/photo-1517022812141-23620dba5c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxBbmltYWxzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Vehicles": "https://images.unsplash.com/photo-1603923407797-2d25dfbbb1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxWZWhpY2xlc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400"
}
$(".spinner-grow").hide()

// async function fetchApi(query) {
//     const clientId = "hE7WN5evihVZ2U2yYOXhMjb-ZHb5NahT8Ml0S-Wwylo";
//     const url =
//         "https://api.unsplash.com/search/photos?page=1&query=" +
//         query +
//         "&per_page=2&client_id=" +
//         clientId;
//     const imageDiv = document.querySelector(".image");
//     const imageUrl = await fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             let imageElement = data.results[0].urls.small;
//             return imageElement;
//         });
//     return imageUrl;
// }
var cardDetails = {
    testType: "",
    name: "",
    difficulty: "",
}
if (localStorage.getItem("resultsHistory") == null) {

    localStorage.setItem("resultsHistory", JSON.stringify([]));
}

function getHistoryQuizList() {
    // <a class="dropdown-item" href="#">Action</a>
    //     <a class="dropdown-item" href="#">Another action</a>
    //     <a class="dropdown-item" href="#"></a>
    //     <a class="dropdown-item" href="#"></a>
    //     <a class="dropdown-item" href="#"></a>
    let history = localStorage.getItem("resultsHistory");
    history = JSON.parse(history)
    let list = []
    for (let val of history)
        list.push(val["quizName"])


    return list
}

function calculateResult(resultArr, correctAnswers, totalQues) {
    let marks = totalQues;




    resultArr.map((e, index) => {
        if (e != correctAnswers[index]) {
            --marks;
        }
    });
    return marks;
}
function testCardSkeleton(id, Name, flag) {
    let checkName = Name;
    var testCardContainer = $("<div></div>")
        .addClass("testCard col-md-3 col-sm-6 hidden")
        .attr("id", "testCardContainer" + id);
    var testCards = $("<div></div>").addClass("testCards card ");
    var testCardsBody = $("<div></div>").addClass("card-body");
    var testCardsImg = $("<div></div>").addClass("testCardsImg");
    let img;
    var attempts = $("<p></p>")
    if (!flag) {
        let search = Name.match(/[a-zA-Z]+/g)[0]
        attempts.attr("id", "courseCode")
            .text("Attempt: " + (Number(Name.substring(Name.length - 1, Name.length)) + 1))
            .addClass("text-center");
        Name = Name.substring(0, Name.length - 1)
        img = imageLinks[search.replace(" ", "_")];
    }
    else {

        img = imageLinks[Name]
    }
    var img_avatar = $("<img></img>")
        .attr("src", img)
        .addClass("w-100  border-bottom")
        .css("height", "200px");
    var testName = $("<div></div>").addClass("testName");

    var courseCode = $("<p></p>")
        .attr("id", "courseCode")
        .text(Name.replace("_", " "))
        .addClass("text-center");
    let txt = ["Start Quiz", "Show Result"]

    var startTestBtn = $("<button></button>").attr("data-toggle", "modal")
        .attr("data-target", "#numberOfQuestion")
        .attr("id", checkName)
        .addClass("startTest")

    if (flag) {
        startTestBtn.text(txt[0]);
    } else {
        startTestBtn.text(txt[1]);

    }
    if (flag)
        startTestBtn.click(() => {
            sessionStorage.setItem("checkRecentActivity", false);

            $("#numberOfQuestionTitle").text(Name.replace("_", " "));
            cardDetails["testType"] = id;
            cardDetails["name"] = Name;
            cardDetails["difficulty"] = "easy";
        });
    else {
        startTestBtn.removeAttr("data-target");
        startTestBtn.click((e) => {
            sessionStorage.setItem("checkRecentActivity", true);
            sessionStorage.setItem("showResult", true);
            // calculateScore()
            let history = localStorage.getItem("resultsHistory");
            history = JSON.parse(history)
            // let nameOfCard = 
            let testName = e.target.id;
            let testNameString = e.target.id.substring(0, testName.length - 1)
            let testIndex = Number(e.target.id.substring(testName.length - 1, testName.length))
            let totalQuizName = []
            history.forEach((val, index) => {
                totalQuizName.push(val.quizName)
            })
            let set = new Set(totalQuizName)
            let requestedTestDetail = ""
            set.forEach((x) => {
                let count = 0;
                if (x === testNameString) {
                    history.forEach((y) => {

                        if (y.quizName == x && count === testIndex) {
                            requestedTestDetail = y;
                        }
                        if (y.quizName == x)
                            count++;
                    })
                }
            });
            let answerAttemptedList = requestedTestDetail.answerAttemptedList
            let correctAnsIndex = requestedTestDetail.correctAnsIndexList
            let questions = requestedTestDetail.question
            let options = requestedTestDetail.options
            let totalQues = questions.length
            let marksObtained = calculateResult(correctAnsIndex, answerAttemptedList, totalQues)
            sessionStorage.setItem("answerAttempted", answerAttemptedList);
            sessionStorage.setItem("YourScore", marksObtained);
            sessionStorage.setItem("QuizName", requestedTestDetail.quizName)
            let mcq = {
                questions: []
            }
            for (let i = 0; i < totalQues; i++) {
                mcq.questions.push({
                    question: questions[i],
                    correctIndex: correctAnsIndex[i],
                    answers: [...options[i]]
                })
            }
            sessionStorage.setItem("mcq", JSON.stringify(mcq))
            location.href = "resultTest.html";
        });
        // startTestBtn
    }
    testCardsImg.append(img_avatar);
    if (!flag) {
        testName.append(courseCode, attempts).addClass("d-flex justify-content-between");
    } else {
        testName.append(courseCode);

    }
    testCardsBody.append(testCardsImg, testName);
    testCards.append(testCardsBody, startTestBtn);
    testCardContainer.append(testCards);
    $(".allTestContainer").append(testCardContainer);

}
//on save click in popup
$("#save").click(() => {
    var amount = Number($("input[name='question']:checked").val());
    var difficulty = cardDetails["difficulty"]
    var testType = cardDetails["testType"];
    var Name = cardDetails["name"];
    if (isNaN(amount)) {
        // $(".modal").effect("shake", { times: 4 }, 1000);
        return
    } else {
        let mcq =
            "https://opentdb.com/api.php?amount=" +
            amount +
            "&category=" +
            testType +
            "&difficulty=" +
            difficulty +
            "&type=multiple";
        fetchMcqApi(mcq).then((data) => {
            $(".spinner-grow").hide()
            if (data == "") {
                return
            }
            else {
                sessionStorage.setItem("mcqData", JSON.stringify(data));
                startCountDown(Name);
            }
        });

    };
}
)
//modal input
$("input").click(() => {
    var id = $("input[name='question']:checked").attr("id");
    for (let e of ['a', 'b', 'c', 'd'])
        if (e != id) { $("." + e).removeClass("bg-primary").css("color", "#fa4134"); }

    $("." + id).addClass("bg-primary").css("color", "white");
})
//modal window on close
$('.modal').on('hidden.bs.modal', function () {
    for (let e of ['a', 'b', 'c', 'd']) {
        $("." + e).removeClass("bg-primary").css("color", "#fa4134");

    }
    $("input[name='question']:checked").prop("checked", false)

});
//fetch api online
async function fetchMcqApi(mcq) {
    $(".spinner-grow").show()
    const result = await fetch(mcq)
        .then((response) => response.json())
        .then((data) => {
            if (data.response_code === 1) {
                alert("No test available");
                // location.href = "./index.html";
                return ""
            } else {
                return data;
            }
        })
    return result;
}
//code start from here
function quizSpread(testType, flag) {
    $(".allTestContainer").empty()
    for (let key of Object.keys(testType)) {
        testCardSkeleton(
            testType[key],
            key, flag
        )
    }


}
function callQuizSpread(testType, flag) {
    quizSpread(testType, flag);
    //scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

}
$(".navbarHome").click(
    () => {
        $(".navbarHome").addClass("active");
        $(".recentActivity").removeClass("active");
        // console.log("hello")
        testTypeSearch = { ...testType }
        callQuizSpread(testType, true)

    }
)
$(".recentActivity").click(
    () => {
        $(".recentActivity").addClass("active");
        $(".navbarHome").removeClass("active");
        let list = getHistoryQuizList()
        var set = new Set(list);
        var orgList = [...list];
        set.forEach((x) => {
            let number = 0;
            for (let e in list) {
                if (x == list[e]) {
                    if (number >= 0) {
                        list[e] += number
                    }
                    number++;
                }
            }

        })
        let searchTestType = {}
        $(".allTestContainer").empty()
        for (let e in orgList) {
            searchTestType[list[e]] = testType[orgList[e]]
        }
        testTypeSearch = { ...searchTestType }
        if (isEmpty(searchTestType)) {
            console.log("inside")
            var noResult = $("<h3></h3>").text("No Recent Activity")
            $(".allTestContainer").append(noResult).addClass("d-flex justify-content-center align-items-center").css("min-height", "100vh")
                .css("Width", "100%")
        } else
            callQuizSpread(searchTestType, false)
    }
)
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
testTypeSearch = { ...testType }
callQuizSpread(testType, true)
var count = 4;
$("#quesContainer").hide();
var intr = 0;
function countNum() {
    let e = document.querySelector(".counter");
    let time = 3;
    intr = setInterval(() => {
        if (time == -1) {
            clearInterval(intr);

            document.location.href = "./attemptTest.html";
        }

        e.innerHTML = `<span>${time}</span>`;

        if (time == 0) {
            e.innerHTML = `<span>Go!</span>`;

        }
        time--;
    }, 1000);
}
function startCountDown(Name) {
    $(".header").hide();
    sessionStorage.setItem("QuizName", Name);
    sessionStorage.setItem("TestStart", true);
    $("#quesContainer").show();

    $(".testCard").hide();
    document.body.style.backgroundColor = "#0d1229";
    countNum();
}
let e = document.querySelector(".counter");
e.innerHTML = `<span></span>`;
function stopCountDown() {
    var ques = confirm("Do you want to continue?");
    if (ques) {
        $("#quesContainer").hide();
        $(".testCard").show();
        document.body.style.backgroundColor = "white";
        let e = document.querySelector(".counter");
        e.innerHTML = `<span></span>`;
        clearInterval(intr);
    }
}
//filter search
function searchQuery(searchList, flag) {
    let searchValue = document.getElementById("searchBar").value.toLowerCase().substring(0, 3);
    if (searchValue == "") {
        callQuizSpread(searchList, flag)
        return
    }
    let testTypeOrg = Object.keys(searchList)
    let testTypeKey = []
    Object.keys(searchList).forEach(function (val, index) {
        testTypeKey.push(val.replace("_", " ").toLowerCase())
    })
    var filteredArr = testTypeKey.filter((x) => {
        var xSub = x.substring(0, 3).toLowerCase()
        return x.toLowerCase().includes(searchValue) || checkName(xSub, searchValue)
    })
    $(".allTestContainer").empty()

    if (filteredArr.length > 0) {
        let searchResult = {}
        filteredArr.forEach(
            (x) => {
                testTypeOrg.forEach((y, index) => {
                    if (x == (y.toLowerCase().replace("_", " ")))
                        searchResult[testTypeOrg[index]] = searchList[testTypeOrg[index]]
                })
            }
        )
        callQuizSpread(searchResult, flag)
    } else {
        var noResult = $("<h3></h3>").text("No result found!")
        $(".allTestContainer").append(noResult).addClass("d-flex justify-content-center align-items-center").css("min-height", "100vh")
            .css("Width", "100%")
    }


}
$("#searchForm").submit(function (event) {
    event.preventDefault();
    let flag;
    if (JSON.stringify(testTypeSearch) === JSON.stringify(testType))
        flag = true;
    else
        flag = false;
    searchQuery(testTypeSearch, flag);
})
checkName = (name, str) => {
    var pattern = str.split("").map((x) => {
        return `(?=.*${x})`
    }).join("");
    var regex = new RegExp(`${pattern}`, "g")
    return name.match(regex);
}




