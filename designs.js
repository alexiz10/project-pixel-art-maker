// Default color for pixel click is black
var color = `rgb(0, 0, 0)`;

// Set event listener for color picker
$('#colorPicker').on('input', function() {
    color = hexToRgb($(this).val());
});

// Get column and row values
$(':submit').on('click', function(e) {
    e.preventDefault();
    const row = $('#inputHeight').val();
    const col = $('#inputWeight').val();
    makeGrid(row, col);
});

// Function that converts hex colors (#000000) to rgb values (rgb(0, 0, 0))
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
    }
    return null;
}

// Function that draws grid onto canvas and handles click delegation
function makeGrid(row, col) {
    let table = $('#pixelCanvas');
    table.empty();
    for (let i = 1; i <= row; i++) {
        table.append(`<tr id="row-${i}"></tr>`);
        for (let j = 1; j <= col; j++) {
            $(`#row-${i}`).append(`<td id="col-${i}-${j}"></td>`);
        }
    }
    table.delegate('td', 'click', function() {
        if ($(this).css('background-color') !== color) {
            $(this).css('background-color', color);
        } else {
            $(this).css('background-color', 'rgb(255, 255, 255)');
        }
    });
}