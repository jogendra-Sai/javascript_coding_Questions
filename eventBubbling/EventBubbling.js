//Event Bubbling(When inner element fires the parents also fire)
// document.getElementById("div1").addEventListener("click", () => {
//   console.log("Div 1 clicked");
// });
// document.getElementById("div2").addEventListener("click", function () {
//   console.log("Div 2 clicked");
// });
// document.getElementById("button").addEventListener("click", (e) => {
//   console.log("Button Clicked");

//   //to stop eventbubbling
//   e.stopPropagation;
// });


//Event Capturing(When Parent fires successively child nodes also fire)

document.getElementById('div1').addEventListener(
    'click', function () {
        console.log('Div 1 clicked');
    }, true);
document.getElementById('div2').addEventListener(
    'click', function () {
        console.log('Div 2 clicked');
    }, true);
document.getElementById('button').addEventListener(
    'click', function (event) {
        console.log('Button clicked');
        // To stop the event from propagating further
        // event.stopPropagation();
    }, true);