"use strict";
$(function() {
    $.getJSON("data.json",display);
});

function display(data) {

    var $list = document.getElementById('list');
    data.forEach(function (d, index) {
        var spicy = d.spicy ? "Spicy" : "il"
            $list.append(
                `
                `
            );
        }
    );
}