$(function ($) {
    $.getJSON("https://coronavirus-19-api.herokuapp.com/all", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("" +
                "<div class='live__" + key + "'>" +
                "   <div class='col__title'>" + val + "</div>" +
                "<div class='col__suptitle'>Total " + key + "</div>" +
                "</div>" +
                "");
        });

        $(items.join("")).appendTo(".live__update");
    });

    $.ajax({
        url: "https://coronavirus-19-api.herokuapp.com/countries",
        success: function (data) {
            $('.table__container').DataTable( {
                data: data,
                "columns": [
                    { data: "country" },
                    { data: "cases" },
                    { data: "todayCases" },
                    { data: "deaths" },
                    { data: "todayDeaths" },
                    { data: "critical" },
                    { data: "recovered" }
                ],
                "order": [[ 1, "desc" ]]
            } );
        }
    });

    //ssh -i reser.pem ubuntu@ec2-184-72-207-116.compute-1.amazonaws.com
});
