setText("appExplanationBox", "Pick the book genre and the number of pages you'd prefer for your book.");
setProperty("appExplanationBox", "font-family", "Georgia");
// We start our code by delcaring our variables.
var pageNumbers = 300;
var bookGenre;
var bookInfo;

//This section explains how clicking the buttons works and what happens when they're clicked.
onEvent("downButton", "click", function( ) {
  pageNumbers = pageNumbers - 25;
  setProperty("pageCounter", "text", "" + pageNumbers);
  updateScreen();
});
onEvent("upButton", "click", function( ) {
  pageNumbers = pageNumbers + 25;
  setProperty("pageCounter", "text", "" + pageNumbers);
  updateScreen();
});
//Here is where we create our If Statements to determine which book you'll get.
onEvent("genreDropdown", "change", function( ) {
  bookGenre = getText("genreDropdown");
  updateScreen();
});
function updateScreen() {
  if (pageNumbers >= 400 && bookGenre == "Sci-Fi") {
    bookInfo = "The Wrong Stars.";
  } else if ((pageNumbers >= 400 && bookGenre == "Fantasy")) {
    bookInfo = "A Darker Shade of Magic.";
  } else if ((pageNumbers >= 300 && bookGenre == "Fantasy")) {
    bookInfo = "Alone.";
  } else if ((pageNumbers >= 300 && bookGenre == "Sci-Fi")) {
    bookInfo = "Axiom's End.";
  } else if ((pageNumbers >= 200 && bookGenre == "Fantasy")) {
    bookInfo = "Dragon's Bait.";
  } else if ((pageNumbers >= 200 && bookGenre == "Sci-Fi")) {
    bookInfo = "The Skeleton Tree.";
  }
  setProperty("outcomeBookTextBox", "text", ("You chose the " + bookGenre + " genre and " + pageNumbers + " pages for  your book, so we reccomend ") + bookInfo);
  setProperty("outcomeBookTextBox", "font-family", "Georgia");
}
