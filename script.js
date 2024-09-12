//Deprecated function
//write your code in document.ready function to load our funtion properly
$(document).ready(function (){

})

// new function for document.ready()
$(function(){
    console.log("Welcome to The Ultimate jQuery Course!🚀");

    //Basics for Jquery 
    //Syntax
    // $- for Accessing JQuery 
    // (Selector)-- Selector for jQuery
    // action(callback function)-- Action to perform
    
    
    
    
    // $(".show").hide();// class selector
    // $(".second").hide();
    
    
    // id selector
    // $("#third").hide();

    // different types of event
    // common used elements
    // old event selector click event
    // $("#button1").click(function(){
    //     $(".second").hide()
    // })
    
    
  
    
    $("body").keydown(function(event){
        console.log(event.which)
        console.log(event.code)
        // console.log(event.)
        if(event.which==72){
            //toggle function  between sho and hide do the reverse of the current
            // $("#keycheck").toggle(2000,function(){
            //     console.log("task completed")
            // })
            
        }
    })
    
    
    
    $("body").on("keyup",function(event){
        console.log(event.code)
        console.log("from keyup function");
    })
    
    
    
    $("body").on("keydown",function(event){
        console.log(event.code)
        console.log("from keyup function");
    
    })


    // Jquery fade effects
    // fade in 
    // fade out
    // fadetogglee
    // fadeto

  // new click event
    //fade togglle fade effect
    // $("#fadebutton").on("click",function(){
    //     $("#fadetest").fadeOut();
    // })
    
    // $("#fadebutton").on("click",function(){
    //     $("#fadetest").fadeToggle();
    // })

    // $("#fadebutton").on("click",function(){
    //     $("#fadetest").fadeTo("slow",0);
    // })


    // $("#fadebutton").on("click",function(){
    //         $("#fadetest").slideToggle();
    //     })


    //passing spped in ms
        $("#fadebutton").on("click",function(){
            $("#fadetest").slideToggle("fast");
        })
    


    //animate method
            // create custom animation
            //spped and callback
            // pass object of css prooperites
            
            

    $("#boxanimate").on("click",function(){
        $(".box").animate({
            width:"+=200px",
            height:"200px",
            fontSize:"20px",

        },"slow")
    })

    // dom manupulation

    // .text   used to set or get the text contrne tof selectd elements
    // .html used to set or get the content with html markup of selected elements
    //.val() used to set or get the valu of form fields


    $("#btn_manipulation").on("click",function(){
        // $("#third").text("Jquery Tutorial")
        // alert(($("#third").text()))


        alert($("#third").html())
        $("#third").html("<em>THis is the html</em>")
        // console.log($(".show").html());
        alert($("#third").html())
        // alert($("#valtext").val())

    })






















    
})
