$(function ($) {
    $.getJSON( "https://coronavirus-19-api.herokuapp.com/all", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "" +
                "<div class='live__" + key + "'>" +
                "   <div class='col__title'>" + val + "</div>" +
                    "<div class='col__suptitle'>Total " + key + "</div>" +
                "</div>" +
                "" );
        });

        $(items.join( "" )).appendTo( ".live__update" );
    });

    $.getJSON( "https://coronavirus-19-api.herokuapp.com/countries", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "" +
                "<tr>" +
                "   <td>" + val.country + "</td>" +
                "   <td>" + val.cases + "</td>" +
                "   <td>" + val.todayCases + "</td>" +
                "   <td>" + val.deaths + "</td>" +
                "   <td>" + val.todayDeaths + "</td>" +
                "   <td>" + val.critical + "</td>" +
                "   <td>" + val.recovered + "</td>" +
                "</tr>" +
                "" );
        });

        $(items.join( "" )).appendTo( ".table__container" );
    });

    //ssh -i reser.pem ubuntu@ec2-184-72-207-116.compute-1.amazonaws.com 
});
<<<<<<< HEAD

   /*Scroll*/
    
    $("[data-scroll]").on("click",function(event) {
        event.preventDefault();
        
        var $this = $(this),
        blockId = $this.data('scroll'),
             blockOffset = $(blockId).offset().top;
             
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html,body").animate({
            scrollTop:blockOffset
        },600);
    });
=======
>>>>>>> 583208d3f2ec77cdf1b5a00b271688ace012280c
