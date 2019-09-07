
$(document).ready(function () {

   
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

         if( scrollTop >$('#menu').height()){
            $('#menu').addClass('scrollNav');


         }
         else{
            $('#menu').removeClass('scrollNav');    

         }
   
        });
        $(".SignClick").click(function() {
            $('.modal').modal('hide');
            $('.signInModal').modal('show');

            
           });
      
        $(".nav-link").click(function() {
            $(".nav-link").removeClass("aciveLink");
           $(this).addClass("aciveLink");
           });
           $(".Features-Link").click(function() { 
	
            $('.nav-link').removeClass('activeLink');
            $(this).addClass('activeLink');
            
                $('html, body').animate({
                    scrollTop: $("#Features").offset().top-(150)
                }, 1000);
            });
            $(".Community-Link").click(function() { 
	
                $('.nav-link').removeClass('activeLink');
                $(this).addClass('activeLink');
                
                    $('html, body').animate({
                        scrollTop: $("#Community").offset().top-(150)
                    }, 1000);
                });
                $(".GetStartSection-Link").click(function() { 
	
                    $('.nav-link').removeClass('activeLink');
                    $(this).addClass('activeLink');
                    
                        $('html, body').animate({
                            scrollTop: $("#GetStartSection").offset().top-(150)
                        }, 1000);
                    });
                    $(".ClientSign").click(function() {
                        $(".signInSign").modal('show');
                       });
                       $(".BusniessSign").click(function() {
                        $(".signInSign").modal('show');
                       });
                     
                       $(".SignIn.SignUp").click(function() {
                        $(".modal").modal('hide');
                        $(".signInUp").modal('show');
                       });
                       $(".nav-link").click(function() { 
                        $('.nav-link').removeClass('activeLink');
                        $(this).addClass('activeLink');
                        });
                        $(".memberPage .nav-item").click(function() { 
                            $('.nav-item').removeClass('activeLink');
                            $(this).addClass('activeLink');
                            });
                            $(".AddGlass").click(function(){
                                $('.ChooseGlass').modal('show');

                            });
                        
                        $(".FamilyBox").click(function() {
                            $(".modal").modal('hide');
                            $('.MemeberModal').modal('show');

                           });
						 
						$('.nextbtn').click(function(){
							active=$('#wizzard').find('.active');
							active.removeClass('active');
							next = active.parent().next().find('.nav-link');
							index = active.parent().next().index();
						
							next.addClass('active');

							$('#wizardContent').children().removeClass('active show');
							$(next.attr('href')).addClass('active show');
							$('.prevtbtn').attr('disabled',false);
							if($('#wizardContent').children().length-1==index){
								$('.nextbtn').attr('disabled',true);
								$('.finishbtn').attr('disabled',false);
							}								
                        });
                        
                        var navListItems = $('div.setup-panel-2 div a'),
                        allWells = $('.setup-content-2'),
                        allNextBtn = $('.nextBtn-2');
              
                allWells.hide();
              
                navListItems.click(function (e) {
                    e.preventDefault();
					navListItems.removeClass('active');
					$(this).addClass('active');
                    var $target = $($(this).attr('href')),
                            $item = $(this);
                            
                            if($(".laststep").hasClass("active")){
                                $("#allNextBtn").css("display","none");

                                $("#finish").css("display","block");
                            }
                            else{
                                $("#finish").css("display","none");
                                $("#allNextBtn").css("display","block");

                            }
                  
                    if (!$item.hasClass('disabled')) {
                        navListItems.removeClass('btn-amber').css('background-color','#7379F8');
                        $item.addClass('btn-amber');
                        allWells.hide();
                        $target.show();
                        $target.find('input:eq(0)').focus();
                    }
                });
              
  
                allNextBtn.click(function(){
					
                    //var curStep = $(this).parent(".setup-content-2"),
						var curStep = $($('div.setup-panel-2 div a.active').attr('href')),

                        curStepBtn = curStep.attr("id"),
                        nextStepSteps = $('div.setup-panel-2 div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                        curInputs = curStep.find("input[type='text'],input[type='url']"),
                        isValid = true;
              
                    $(".form-group").removeClass("has-error");
                    for(var i=0; i< curInputs.length; i++){
                        if (!curInputs[i].validity.valid){
                            isValid = false;
                            $(curInputs[i]).closest(".form-group").addClass("has-error");
                        }
                    }
              
                    if (isValid)
                        nextStepSteps.removeAttr('disabled').trigger('click');

          
                });
              
                $('div.setup-panel-2 div a.btn-amber').trigger('click');
                $( ".clientImg" ).click(function() {
  $( ".MemberdropDown" ).toggle( );
    // Animation complete.
});



                $('.GlassCarusel').owlCarousel({
                    loop:true,
                    autoplay:false,
                    nav:false,
                    dots:true,
                    responsiveClass: true,
                    center:true,
                    responsive:{
                        0:{
                            items:1
                        }}
                       
                    
                });
                $(".GlassBox").click(function(){
                    $('.GlassChoosenModal').modal('show');
            
                });
            
            
});


  
