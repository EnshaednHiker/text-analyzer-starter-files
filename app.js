function getWords(rawString) {
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function analyzeText(){
    var wordBlock = "";
    var wordArray = [];
    $('textarea#js-user-text').click().empty();
    
    $("#text-area-box").submit(function(){
        event.preventDefault();
        $("#js-word-count,#js-unique-word-count,#js-average-word-length").empty();
        wordBlock = $('textarea#js-user-text').val(); 
        wordArray = getWords(wordBlock);
        $(".text-report").removeClass("hidden");
        $("#js-word-count").append(countWords(wordArray));

        $("#js-average-word-length").append(averageWordLength(wordArray));

         
    });

}

function countWords(array){
return array.length;
}

function countUniqueWords(array){
    array
}

function averageWordLength(array){
    var sumLength = 0;
     
    array.forEach(function(element){
       sumLength += element.length;
    });
    return sumLength/array.length;
}

$(analyzeText)