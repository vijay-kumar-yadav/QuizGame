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

async function fetchApi(query) {
    const clientId = "hE7WN5evihVZ2U2yYOXhMjb-ZHb5NahT8Ml0S-Wwylo";
    const url =
        "https://api.unsplash.com/search/photos?page=1&query=" +
        query +
        "&per_page=2&client_id=" +
        clientId;
    const imageDiv = document.querySelector(".image");
    const imageUrl = await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let imageElement = data.results[0].urls.small;

            return imageElement;
        });
    return imageUrl;
}
async function testCardSkeleton(id, Name) {
    var testCardContainer = $("<div></div>")
        .addClass("testCard col-md-3 col-sm-6 ")
        .attr("id", "testCardContainer" + id);
    var testCards = $("<div></div>").addClass("testCards card ");
    var testCardsBody = $("<div></div>").addClass("card-body");
    var testCardsImg = $("<div></div>").addClass("testCardsImg");
    var img_avatar = $("<img></img>")
        .attr("src", await fetchApi(Name))
        .addClass("w-100  border-bottom")
        .css("height", "200px");
    var testName = $("<div></div>").addClass("testName");
    var courseCode = $("<p></p>")
        .attr("id", "courseCode")
        .text(Name)
        .addClass("text-center");
    var startTestBtn = $("<button></button>")
        .attr("id", "startTest" + id)
        .addClass("startTest")
        .text("Start Quiz");
    startTestBtn.click(() => startCountDown(id, Name));
    testCardsImg.append(img_avatar);
    testName.append(courseCode);
    testCardsBody.append(testCardsImg, testName);
    testCards.append(testCardsBody, startTestBtn);
    testCardContainer.append(testCards);
    $(".allTestContainer").append(testCardContainer);
}
for (let key of Object.keys(testType)) {
    testCardSkeleton(
        testType[key],
        key.replace("_", " ").replace("_", " ")
    );
}

var count = 4;
$("#quesContainer").hide();
var intr = 0;
function countNum() {
    let e = document.querySelector(".counter");
    let time = 3;
    intr = setInterval(() => {
        if (time == -1) {
            document.location.href = "./attemptTest.html";
            clearInterval(intr);
        }
        e.innerHTML = `<span>${time}</span>`;
        if (time == 0) {
            e.innerHTML = `<span>Let's Go!</span>`;
        }
        time--;
    }, 1000);
}
function startCountDown(testTypeId, Name) {
    $("header").hide();
    sessionStorage.setItem("TestType", testTypeId);
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