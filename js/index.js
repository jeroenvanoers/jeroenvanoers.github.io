$(".top-left").click(function() {
    alert( "top-left" );
  });

  $(".top-left-center").click(function() {
    alert( "top-left-center" );
  });

  $(".top-right-center").click(function() {
    alert( "top-right-center" );
  });

  $(".top-right").click(function() {
    alert( "top-right" );
  });

  $(".bottom-left").click(function() {
    alert( "bottom-left" );
  });

  $(".bottom-center").click(function() {
    alert( "bottom-center" );
  });

  $(".bottom-right").click(function() {
    alert( "bottom-right" );
  });

// MODAL MENU
  $(".menu").click(function() {
    $(".sidemenu").css('left', '0px');
    $("canvas").css('opacity', '0.6');
  });

  $(".container-custom").click(function() {
    $(".sidemenu").css('left', '-180px');
    $("canvas").css('opacity', '1');

    $(".setting-modal").hide();
    $(".help-modal").hide();
    $(".shop-modal").hide();
    $(".friends-modal").hide();
    $(".leave-modal").hide();
  })

  $(".setting-close").click(function(){
    $(".sidemenu").css('left', '-180px');
    $(".setting-modal").hide();
    $(".help-modal").hide();
    $(".shop-modal").hide();
    $(".friends-modal").hide();
    $(".leave-modal").hide();
    $("canvas").css('opacity', '1');
  });

  $(".shop").click(function() {
    alert( "shop" );
  });

  $(".sidemenu-settings").click(function() {
    $(".setting-modal").show();
    $(".help-modal").hide();
    $(".shop-modal").hide();
    $(".friends-modal").hide();
    $(".leave-modal").hide();
  });

  $(".sidemenu-help").click(function() {
    $(".help-modal").show();
    $(".setting-modal").hide();
    $(".shop-modal").hide();
    $(".friends-modal").hide();
    $(".leave-modal").hide();
  });

  $(".sidemenu-shop").click(function() {
    $(".shop-modal").show();
    $(".setting-modal").hide();
    $(".help-modal").hide();
    $(".friends-modal").hide();
    $(".leave-modal").hide();
  });

  $(".sidemenu-friends").click(function() {
    $(".friends-modal").show();
    $(".setting-modal").hide();
    $(".help-modal").hide();
    $(".shop-modal").hide();
    $(".leave-modal").hide();
  });

  $(".sidemenu-leave").click(function() {
    $(".leave-modal").show();
    $(".setting-modal").hide();
    $(".help-modal").hide();
    $(".shop-modal").hide();
    $(".friends-modal").hide();
  });
