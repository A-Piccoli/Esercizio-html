var svgns = "http://www.w3.org/2000/svg",
    container = document.getElementById('col-sm')
    circle.setAttributeNS(null, 'cx', 220);
    circle.setAttributeNS(null, 'cy', 220);
    circle.setAttributeNS(null, 'r', 110);
    circle.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;' );
    container.appendChild(circle);

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

var x = 50;
var y = 50;
var xMax = $('#svgArea').width();
var yMax = $('#svgArea').height();

$("#addCircle").click(function () {
    var existingContent = $('#svgArea').html();
    var toInsert = '<circle cx="' + x + '" cy="' + y + '" r="40" stroke="green" stroke-width="4" fill="yellow" />';
    $('#svgArea').html(existingContent + toInsert);
    if ((x + 100) <= xMax) {
        x += 100;
    } else {
        if ((y + 100) <= yMax) {
            y += 100;
            x = 50;
        } else {
            alert("There is no place inside the canvas!");
        }
    }
});