jQuery(document).ready(function() {

function getData() {
    $.get("http://localhost:8080/assignment1/js/listData.json", function (data) {
        console.log(data.listData);
        setData(data.listData);
    }, "json");
}

function setData(listData) {
    $.each(listData, function(key, value) {
        $('#list').append('<li class="list-item" id="list-'+value.id+'"><label for="list-checkbox-'+value.id+'"><input id="list-checkbox-'+value.id+'" class="list-checkbox" type="checkbox">'+value.name+'</label></li>');
    });
    onItemClick();
}

function onItemClick() {
    $('li > label > input').click(function() {
        if ($(this).is(':checked')) {
            $(this).parent('label').parent('li').addClass('selected');
            $(this).parent('label').parent('li').removeClass('unselected');
        }
        if (!$(this).is(':checked')) {
            $(this).parent('label').parent('li').removeClass('selected');
        }
        $('li > label > input').each(function() {
            if (!$(this).is(':checked') && $('.list-item').hasClass('selected')) {
                $('.list-item:not(.selected').addClass('unselected');
            }
            if (!$('.list-item').hasClass('selected')) {
                $(this).parent('label').parent('li').removeClass('unselected');
            }
        });
    });
}

function removeItems() {
    $("#delete").click(function() {
        if (!$('.list-item').hasClass('selected')) {
            alert("Please select at least one list item.");
        }
        $('.list-item.selected').fadeOut(500, function() {
            $(this).remove();
        });
        $('.list-item').removeClass('unselected');
    });
}

getData();
removeItems();


// function deleteAction(arg1) {
//     console.log(arg1);
// }

// updateSelectedListItems();


// $('#delete').click(deleteAction);


});