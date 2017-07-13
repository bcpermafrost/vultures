
//modal views
function guitaristmodal(action) {
  $('#guitaristmodal')
    .modal(action);

}

function drummermodal(action) {
  $('#drummermodal')
    .modal(action);

}

function vocalistmodal(action) {
  $('#vocalistmodal')
    .modal(action);
}

(function($) {          
    $(document).ready(function(){               
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 400) {
                $('.ui.inverted.menu').transition('fade right');
            }
            else{
                $('.ui.inverted.menu').transition('fade right');
            }
        });
    });
})(jQuery);