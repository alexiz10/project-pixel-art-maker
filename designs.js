var color = '#000000';

$('#colorPicker').on('input', function() {
    color = $(this).val();
});

// Get column and row values
$(':submit').on('click', function(e) {
    e.preventDefault();
    const row = $('#inputHeight').val();
    const col = $('#inputWeight').val();
    makeGrid(row, col);
});

function makeGrid(row, col) {
    let table = $('#pixelCanvas');
    table.empty();
    for (let i = 1; i <= row; i++) {
        table.append(`<tr id="row-${i}"></tr>`);
        for (let j = 1; j <= col; j++) {
            $(`#row-${i}`).append(`<td id="col-${i}-${j}"></td>`);
        }
    }
}
