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
$('.hambuger-menu').on('click', () => toggleMobileMenu('.mobile-menu'))
$('.outer-zone').on('click', (e) => {
    var menuitem = $(".menu-item");

    if (!menuitem.is(e.target) && menuitem.has(e.target).length === 0) {
        toggleMobileMenu('.mobile-menu')
    }

})