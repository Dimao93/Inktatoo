$(window).on('load',function(){
       var toggle = true;
    $(".menu-button").click(function(){
        if(toggle==true){
             $(".header-menu").show(500);
            toggle=false;
        }
        else if(toggle==false){
            $(".header-menu").hide(500);
            toggle=true;
        }
    })
    var w = $(".member-img").css('height');

    $(".team-main").css("height",w);
    $(".team-title").css("height",w);
    $(".team-submit").css("height",w);
  
    
/*====================================Modal window================*/    
    
    $(".image-search").click(function(){
        var src = $(this).parent().parent().find('.gallery-image__img').attr('src');
       
        $('#overlay').fadeIn(400);
        $('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
        $('#modal_form').append('<img src='+src+ '> '  );
    })
    
    $("#modal_close").click(function(){
    var a = $("#modal_form>img");
        a.remove();
   
        $("#modal_form").animate({opacity: 0, top: '45%'}, 200,
                    function(){
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
    });
    
    $("input[type=submit]").eq(1).click(function(e){
     
    var input = $("input[type=text], input[type=email]");
        for(i=0;i<input.length;i++){
            if(input.eq(i).val()==""){
                  e.preventDefault();
                input.eq(i).css("border","1px solid red");
            }
        }
   })
    $("input[type=submit]").eq(0).click(function(e){
    var email = $("input[type=email]").eq(0);
        if(email.val()==""){
             e.preventDefault();
            email.css("border","1px solid red");
        }
   })
})
    



/*=======================Resize height===========*/
$(window).resize(function(){
    var w = window.innerWidth;
    if(w>560){
         $(".header-menu").show(500);
        $(".header-menu").css('display','inline-block');
    }
    else if(w<560){
        $(".header-menu").css('display','none');
    }
    var w = $(".member-img").css('height');
   
    $(".team-main").css("height",w);
    $(".team-title").css("height",w);
    $(".team-submit").css("height",w);
})

/*==============PRELODER====================================*/

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});



/*================Плавный переход к якорям=========*/

$(document).ready(function(){
    $(".header-menu").on("click","a", function (event){
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500)
    });
});

  

