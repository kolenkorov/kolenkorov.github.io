$(function (i) {
    var o, n;
    i(".title_block").on("click", function () {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
            o.hasClass("active_block") ? (o.removeClass("active_block"),
                n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                    o.siblings(".active_block").removeClass("active_block").children(
                        ".info").stop(!0, !0).slideUp())
    });
});






//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoaSkge1xyXG4gICAgdmFyIG8sIG47XHJcbiAgICBpKFwiLnRpdGxlX2Jsb2NrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG8gPSBpKHRoaXMpLnBhcmVudHMoXCIuYWNjb3JkaW9uX2l0ZW1cIiksIG4gPSBvLmZpbmQoXCIuaW5mb1wiKSxcclxuICAgICAgICAgICAgby5oYXNDbGFzcyhcImFjdGl2ZV9ibG9ja1wiKSA/IChvLnJlbW92ZUNsYXNzKFwiYWN0aXZlX2Jsb2NrXCIpLFxyXG4gICAgICAgICAgICAgICAgbi5zbGlkZVVwKCkpIDogKG8uYWRkQ2xhc3MoXCJhY3RpdmVfYmxvY2tcIiksIG4uc3RvcCghMCwgITApLnNsaWRlRG93bigpLFxyXG4gICAgICAgICAgICAgICAgICAgIG8uc2libGluZ3MoXCIuYWN0aXZlX2Jsb2NrXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlX2Jsb2NrXCIpLmNoaWxkcmVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi5pbmZvXCIpLnN0b3AoITAsICEwKS5zbGlkZVVwKCkpXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sImZpbGUiOiJhY2NvcmRpb24uanMifQ==
