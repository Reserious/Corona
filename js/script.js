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
