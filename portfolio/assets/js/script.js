(function( $ ) {
    var APP = {
        init: function (settings) {
            if ($('#main_navbar').length > 0) {
                REP.search_functions();
            }				
        },

        showPage: function (page){
            jQuery.ajax({
                url: 'src/controller.php',
                type: 'POST',
                data: {
                    action: 'showpage',
                    page: page
                },
                success: function(data, textStatus, xhr) {
                    if (data.success) {														
                        if(page < data.data.meta.last_page){                            
                            $('#rep-loader-overlay .message').html('Synching data in <span class="percentage">' + percentage.toFixed(0) + '%</span>')								
                        }
                    } else {
                        me.prop("disabled", false).text('Sync Listings');
                        $('.sync-preload-msg').remove();
                        alert(data.error);
                    }
                }
            });
        }
    }

    $(document).ready(APP.init);	
})( jQuery );