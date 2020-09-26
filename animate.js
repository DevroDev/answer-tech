$(document).ready(function(){
    $('.js--scroll-to-about').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-about').offset().top},2000);
    })
    $('.js--scroll-to-service').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-service').offset().top},2000);
    })
    $('.js--scroll-to-project').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-project').offset().top},2000);
    })
    $('.js--scroll-to-blog').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-blog').offset().top},2000);
    })
    $('.js--scroll-to-contact').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-contact').offset().top},3000);
    })
    $('.js--scroll-to-home').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-home').offset().top},3000);
    })
    //Animation on Scroll

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated bounceIn');
    },{
        offset:'50%'
    })
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated bounceIn');
    },{
        offset:'70%'
    })
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInRight');
    },{
        offset:'70%'
    })
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeInDown');
    },{
        offset:'40%'
    })
    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animated fadeInUp');
    },{
        offset:'40%'
    })
    $('.js--wp-6').waypoint(function(direction){
        $('.js--wp-6').addClass('animated bounceIn');
    },{
        offset:'50%'
    })
        $('.js--wp-7').waypoint(function(direction){
        $('.js--wp-7').addClass('animated fadeInLeft');
    },{
        offset:'50%'
    })
        $('.js--wp-8').waypoint(function(direction){
        $('.js--wp-8').addClass('animated bounceIn');
    },{
        offset:'50%'
    })
            $('.js--wp-9').waypoint(function(direction){
        $('.js--wp-9').addClass('animated fadeInRight');
    },{
        offset:'50%'
    })
            $('.js--wp-10').waypoint(function(direction){
        $('.js--wp-10').addClass('animated fadeInDown');
    },{
        offset:'50%'
    })
            $('.js--wp-11').waypoint(function(direction){
        $('.js--wp-11').addClass('animated fadeInLeft');
    },{
        offset:'50%'
    })
            $('.js--wp-12').waypoint(function(direction){
        $('.js--wp-12').addClass('animated fadeInRight');
    },{
        offset:'50%'
    })
            $('.js--wp-13').waypoint(function(direction){
        $('.js--wp-13').addClass('animated fadeInUp');
    },{
        offset:'50%'
    })
    $('.js--wp-about').waypoint(function(direction){
        $('.js--wp-about').addClass('animated fadeInLeft');
    },{
        offset:'50%'
    })
})