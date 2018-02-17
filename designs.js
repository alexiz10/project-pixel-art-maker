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

}
