$(window).on('load', function() {
    $('#myModal').modal('show');
});

function toggleOpenBox(fa) {
    if (fa.hasClass('fa-plus')) {
        fa.removeClass('fa-plus')
        fa.addClass('fa-minus')
        return true
    }
    fa.removeClass('fa-minus')
    fa.addClass('fa-plus')
    return false;
}

function toggleMobileMenu(selector) {
    // Add animation later
    $(selector).toggleClass('d-none')
}

$('.footer-item .title').on('click', function() {
    let fa = ($(this).find('.fa'))
    let content = $(this).parent().find('.content');

    if (toggleOpenBox(fa)) {
        // Add animation later
        $(content).removeClass('d-none');
    } else {
        // Add animation later
        $(content).addClass('d-none');
    }
})
$('.hambuger-menu').on('click', () => {
    toggleMobileMenu('.mobile-menu')

})
$('.outer-zone').on('click', (e) => {
    var menuitem = $(".menu-item");
    var clocklayout = $('.clock-layout');

    if (!menuitem.is(e.target) && menuitem.has(e.target).length === 0) {
        toggleMobileMenu('.mobile-menu')
    }

    if (!clocklayout.is(e.target) && clocklayout.has(e.target).length === 0) {
        toggleMobileMenu('.clock-layout-container')
    }
})

$(document).ready(function() {
    let dueDate = '2022/04/05';

    clockUpdate(dueDate);
    setInterval(clockUpdate, 1000, [dueDate]);
})

function setNumbers(selector, value) {
    let numbers = $(selector).children()
    let strValue = value + '';
    for (let i = 0; i <= 1; i++) {
        $(numbers[i]).text(strValue[i])
    }

}

function clockUpdate(dueDate) {
    dueDate = new Date(dueDate)
    var date = new Date(),
        dateValue = (Date.parse(date) / 1000);
    var dueDateValue = (Date.parse(dueDate) / 1000);
    var timeLeft = dueDateValue - dateValue

    var days = Math.floor(timeLeft / 86400);
    var real_hours = Math.floor((timeLeft) / 3600);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    console.log(days, real_hours, hours);

    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    setNumbers('.hour', real_hours)
    setNumbers('.minute', minutes)
    setNumbers('.second', seconds)
}