function getWords(rawString) {
    return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function analyzeText() {
    var wordBlock = "";
    var wordArray = [];

    $("#text-area-box").submit(function () {
        event.preventDefault();
        $("#js-word-count,#js-unique-word-count,#js-average-word-length").empty();
        wordBlock = $('textarea#js-user-text').val();
        wordArray = getWords(wordBlock);
        $(".text-report").removeClass("hidden");
        $("#js-word-count").append(countWords(wordArray));
        $("#js-unique-word-count").append(countUniqueWords(wordArray));
        $("#js-average-word-length").append(averageWordLength(wordArray));
        $("#js-average-word-length").append(" characters");
    });

}

function countWords(array) {
    return array.length;
}

function countUniqueWords(array) {
    var arrayUnique = [];
    array.forEach(function (word, element) {
        if (arrayUnique.includes(word) === false) {
            arrayUnique.push(word);
        }
    });
    return arrayUnique.length;
}

function averageWordLength(array) {
    var sumLength = 0;

    array.forEach(function (word) {
        sumLength += word.length;
    });
       return (Math.round(sumLength / array.length * 100))/100;
}

$(analyzeText)