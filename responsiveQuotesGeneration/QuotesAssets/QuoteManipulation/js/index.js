var differentQuotes = [
    {
        "authorName" : "mahmoud khalid shabaan" ,
        "quoteOrdering" : "frist quote" ,
        "quoteDescription" : "this is our frist quote"
    },
    {
        "authorName" : "youssef mohamed morsy" ,
        "quoteOrdering" : "second quote" ,
        "quoteDescription" : "this is our second quote"
    },
    {
        "authorName" : "youssef ashraf fathy" ,
        "quoteOrdering" : "third qoute" ,
        "quoteDescription" : "this is our third quote"
    },
    {
        "authorName" : "mohamed mahmoud mohamed",
        "quoteOrdering" : "fourth quote" , 
        "quoteDescription" : "this is our fourth quote"
    },
    {
        "authorName" : "youssef mohamed abdelatif" ,
        "quoteOrdering" : "fifth quote" ,
        "quoteDescription" : "this is our fifth quote"
    },
    {
        "authorName" : "youssef yasser antar" , 
        "quoteOrdering" : "sixth quote" ,
        "quoteDescription" : "this is our sixth quote",
    },
    {
        "authorName" : "youssef mohamed el barwany",
        "quoteOrdering" : "seventh quote",
        "quoteDescription" : "this is our seventh quote",
    },
    {
        "authorName" : "youssef mohamed abd el khalek",
        "quoteOrdering" : "last quote",
        "quoteDescription" : "this is our eight quote"
    }
];
var differentQuotesContainer=document.querySelector(".quotes-generation-container #quotesContainer");
console.log(differentQuotesContainer);
var generationButton=document.querySelector(".quotes-generation-container #generationButton");
console.log(generationButton);
generationButton.addEventListener("click" , function(){
    differentQuotesContainer.style.display="block";
})
var oldNumber;
function testingQuoteNumber(){
    var quoteNumber = Math.floor(Math.random() * differentQuotes.length);
    while(oldNumber == quoteNumber){
        var quoteNumber = Math.floor(Math.random() * differentQuotes.length);
    };
    oldNumber = quoteNumber;
    var authName = document.getElementById("authorName");
    authName.innerHTML = "the author name of the quote is : "+differentQuotes[quoteNumber].authorName;
    var quoteOrd = document.getElementById("quoteOrdering");
    quoteOrd.innerHTML = "the quote ordering is : "+differentQuotes[quoteNumber].quoteOrdering;
    var quoteDes = document.getElementById("quoteDescription");
    quoteDes.innerHTML = "the quote description is : "+differentQuotes[quoteNumber].quoteDescription;
}