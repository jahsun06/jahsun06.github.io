(function( $ ) {
    var menu_btn;
    var url = 'src/controllers/controller.php';
    var APP = {

        init: function (settings) {            
            if ($('#main_navbar').length > 0) {
                menu_btn = $(".nav-link");
                menu_btn.on('click', function(){    
                    $('body .main').append(appLoader('loading...'));	
                    APP.showPage();
                });
            }				
        },

        showPage: function (page){
            jQuery.ajax({
                url: url,
                type: 'POST',
                data: {
                    action: 'showpage',
                    page: page
                },
                success: function(data, textStatus, xhr) {
                    if (data.success) {														
                        
                    } else {
                        me.prop("disabled", false).text('Sync Listings');
                        $('.sync-preload-msg').remove();
                        alert(data.error);
                    }
                }
            });
        }
    }

    var appLoader = function(message){
        return '<div id="app-loader-overlay"><div class="cv-spinner"><span class="sync-spinner"></span></div><div class="message">' + message+ '</div></div>';
    }

    $(document).ready(APP.init);	
})( jQuery );