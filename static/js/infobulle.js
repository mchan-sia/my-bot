function init_infobulle() {
    //gestion des infobulle
    $(function () {
        $("#tooltip").tooltip({
        });
    });
    $(".info").each(function () {
        $(this).tooltip({content: $(this).attr("title"),
            show: {
                effect: "slideDown",
                delay: 250
            }
        });
    });
}