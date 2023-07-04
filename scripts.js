$(document).ready(function () {

    const $owlCarousel = $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        navText: [
            '<svg width="5vw" height="5vw" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
            '<svg width="5vw" height="5vw" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
        ],
        onInitialized: handleCarouselNavigation, // Добавляем обработчик события onInitialized
        onTranslated: handleCarouselNavigation
    });

    function handleCarouselNavigation(event) {
        const currentIndex = event.item.index; // Получаем текущий индекс кадра
        const totalItems = event.item.count; // Получаем общее количество кадров

        const $navPrev = $(this.$element).find('.owl-prev');
        const $navNext = $(this.$element).find('.owl-next');

        // Скрываем или показываем навигационные стрелки в зависимости от текущего индекса
        if (currentIndex === 0) {
            $navPrev.hide();

            $navNext.show();
            $navNext.css('transform', 'translateX(0%)');

        } else if (currentIndex === totalItems - 1) {
            $navPrev.show();
            $navPrev.css('transform', 'translateX(-100%)');

            $navNext.hide();

        } else {
            $navPrev.show();
            $navPrev.css('transform', 'translateX(-100%)');

            $navNext.show();
            $navNext.css('transform', 'translateX(-100%)');

        }
    }


    $('.labels_south .popup_ulpan').hover(function () {
        var popupId = $(this).data('popup');
        $('#' + popupId).show();
    }, function () {
        var popupId = $(this).data('popup');
        $('#' + popupId).hide();
    });

});

