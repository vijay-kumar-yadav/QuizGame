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
const imageLinks = {
    "Books": "https://images.unsplash.com/photo-1608659597669-b45511779f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxCb29rc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Film": "https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxGaWxtfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Music": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxNdXNpY3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Television": "https://images.unsplash.com/photo-1593784991095-a205069470b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxUZWxldmlzaW9ufGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Video_Games": "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxWaWRlbyUyMEdhbWVzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Board_Games": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxCb2FyZCUyMEdhbWVzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Comics": "https://images.unsplash.com/photo-1607823477522-177cff8183d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxDb21pY3N8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Nature": "https://images.unsplash.com/photo-1657214059157-dd0e35b13f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MXwxfHNlYXJjaHwxfHxOYXR1cmV8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Computers": "https://images.unsplash.com/photo-1629654291663-b91ad427698f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxDb21wdXRlcnN8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Gadgets": "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxHYWRnZXRzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Mathematics": "https://images.unsplash.com/photo-1528838059403-95f01420989b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxNYXRoZW1hdGljc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Mythology": "https://images.unsplash.com/photo-1543502708-eb29f9b35f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxNeXRob2xvZ3l8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "General_Knowledge": "https://images.unsplash.com/photo-1591010591040-cbaf98b9b924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxHZW5lcmFsJTIwS25vd2xlZGdlfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Sports": "https://images.unsplash.com/photo-1601259501461-9a6b562b2728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxTcG9ydHN8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Geography": "https://images.unsplash.com/photo-1578589315522-9e5521b9c158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxHZW9ncmFwaHl8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "History": "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxIaXN0b3J5fGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Politics": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxQb2xpdGljc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Art": "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MXwxfHNlYXJjaHwxfHxBcnR8ZW58MHx8fHwxNjY2MDcxOTY3&ixlib=rb-1.2.1&q=80&w=400",
    "Celebrities": "https://images.unsplash.com/photo-1609741199878-3e8ebdb1dbc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxDZWxlYnJpdGllc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400",
    "Animals": "https://images.unsplash.com/photo-1517022812141-23620dba5c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxBbmltYWxzfGVufDB8fHx8MTY2NjA3MTk2Nw&ixlib=rb-1.2.1&q=80&w=400",
    "Vehicles": "https://images.unsplash.com/photo-1603923407797-2d25dfbbb1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjkxNTB8MHwxfHNlYXJjaHwxfHxWZWhpY2xlc3xlbnwwfHx8fDE2NjYwNzE5Njc&ixlib=rb-1.2.1&q=80&w=400"
}

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
//             console.log("" + query + ":" + imageElement)
//             return imageElement;
//         });
//     return imageUrl;
// }
function testCardSkeleton(id, Name) {
    var testCardContainer = $("<div></div>")
        .addClass("testCard col-md-3 col-sm-6 hidden")
        .attr("id", "testCardContainer" + id);
    var testCards = $("<div></div>").addClass("testCards card ");
    var testCardsBody = $("<div></div>").addClass("card-body");
    var testCardsImg = $("<div></div>").addClass("testCardsImg");
    var img_avatar = $("<img></img>")
        .attr("src", imageLinks[Name])
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
    // console.log(id)

}
for (let key of Object.keys(testType)) {
    testCardSkeleton(
        testType[key],
        key
    )
};


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

