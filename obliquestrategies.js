//original sourced from http://www.oblicard.com/# Oblique strategies and http://codepen.io/davidhession/
var down = !1,
    time = 600,
    swing = 100,
    quotes = null,
    current_content = null,
    next_content = null,
    animating = !1;
$(document).ready(function() {
    quotes = $(".quote_container p");
    change_card();
    $("#change").click(change_card);
});
function set_content(a) {
    next_content = a;
    hide_content()
}
function show_about(a) {
    a.preventDefault();
    a = $("#about");
    a.remove();
    $(".quote_container").append(a);
    set_content(a);
    return !1
}
function close_about() {
    change_card()
}
function get_random_card() {
    return $(quotes[Math.round(Math.random() * quotes.length)])
}
function change_card(a) {
    a && a.preventDefault();
    set_content(get_random_card());
    _gaq.push(["_trackEvent", "Cards", "Draw"]);
    return !1
}
function hide_content() {
    animating || (animating = !0, $(".quote_container").css("padding-right", "0px").css("padding-left", "0px").animate({
        "padding-left": swing + "px"
    }, time, "easeInQuad"), $(".blinds").show().animate({
        "background-position-y": "0px"
    }, time, "easeInOutCubic", show_content))
}
function show_content() {
    current_content && current_content.removeClass("shown");
    current_content = next_content;
    next_content = null;
    current_content.addClass("shown");
    $(".quote_container").stop().clearQueue().css("padding-left", "0px").css("padding-right", swing + "px").animate({
        "padding-right": "0px"
    }, time, "easeOutQuad");
    $(".blinds").animate({
        "background-position-y": "-1200px"
    }, time, "easeInOutCubic", show_complete)
}
function show_complete() {
    animating = !1;
    $(".blinds").hide()
}
;

