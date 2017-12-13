
$(function() {
    $(".doc_list").draggable();

    $("#bin").droppable({
        drop: function(event, ui) {
            $(ui.draggable).remove();
        }
    });
});