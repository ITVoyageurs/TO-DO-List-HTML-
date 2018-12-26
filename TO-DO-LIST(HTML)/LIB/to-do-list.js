/*

Author : ITVoyagers (http://itvoyagers.in/)

Date :25th December 2018

Description : Simple TO-DO List developed using HTML, CSS, JS and their libraries.

*/
        $("#sub").hide();

        $("#add").on("click",function(event){
            $("#sub").slideToggle(500);
        });

        $("ul").on("click","li",function(event){
            $(this).toggleClass("st");
        });

        $("button").on("click",function(event){

        var val = $("#item").val();
        if(val.length>0)
        {
            $("#item").val("");
            $("ul").append("<li><span class='rm'><i class='fa fa-trash-o' aria-hidden='true'></i></span>"+val+"</li>");
            $("#item").css("border","none");
            val="";
        }
        });
        $("ul").on("click","span",function(event){
            $(this).parent().remove();
        });
