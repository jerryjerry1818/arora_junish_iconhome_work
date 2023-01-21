console.log('java script is running!');


/*this is a js block comment
/*that let statement creates a variable- a chunck of computer  memorythat can hold references to data that you want to save . we are storing a reference t an element on the page with this line - look for the element with the ID we specify inside of out round brackets(the image tag with the Id of bitmap-graphic)

documents refers to the index.html page ; query selector is how JS uses Css  to select the elemnt on the page ( called the m method)
*/


//step-1-select the element you want the user to interac with 
let bitmapgraphic = document.querySelector("#bitmapgraphic");

//step-3-whta happens when event are triggered 
function logID() {
    console.log(this.id);
}


//step-2-how  do you want the user to interac with the element
bitmapgraphic.addEventListener('click',logID);