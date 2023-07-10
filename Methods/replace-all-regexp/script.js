let text = "I love cats. Cats are very easy to love. Cats are vey popular";
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g, "dogs");

document.getElementById("demo").innerHTML = text;