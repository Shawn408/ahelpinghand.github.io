$('#sortone').on('click', function(event) {
    if($('#sorttwo').hasClass('btn-white')){
        $('#sorttwo').removeClass('btn-white');
    }
    if($('#sortthree').hasClass('btn-white')){
        $('#sortthree').removeClass('btn-white');
    }
    if($('#sortfour').hasClass('btn-white')){
        $('#sortfour').removeClass('btn-white');
    }
    if(!$(this).hasClass('btn-white'))
          $(this).addClass('btn-white');
  });
  $('#sorttwo').on('click', function(event) {
    if($('#sortone').hasClass('btn-white')){
        $('#sortone').removeClass('btn-white');
    }
    if($('#sortthree').hasClass('btn-white')){
        $('#sortthree').removeClass('btn-white');
    }
    if($('#sortfour').hasClass('btn-white')){
        $('#sortfour').removeClass('btn-white');
    }
    if(!$(this).hasClass('btn-white'))
          $(this).addClass('btn-white');
  });
  $('#sortthree').on('click', function(event) {
    if($('#sortone').hasClass('btn-white')){
        $('#sortone').removeClass('btn-white');
    }
    if($('#sorttwo').hasClass('btn-white')){
        $('#sorttwo').removeClass('btn-white');
    }
    if($('#sortfour').hasClass('btn-white')){
        $('#sortfour').removeClass('btn-white');
    }
    if(!$(this).hasClass('btn-white'))
          $(this).addClass('btn-white');
  });
  $('#sortfour').on('click', function(event) {
    if($('#sortone').hasClass('btn-white')){
        $('#sortone').removeClass('btn-white');
    }
    if($('#sorttwo').hasClass('btn-white')){
        $('#sorttwo').removeClass('btn-white');
    }
    if($('#sortthree').hasClass('btn-white')){
        $('#sortthree').removeClass('btn-white');
    }
    if(!$(this).hasClass('btn-white'))
          $(this).addClass('btn-white');
  });
  $('#dataone').on('click', function(event) {
    if($('#datatwo').hasClass('btn-white')){
        $('#datatwo').removeClass('btn-white');
    }
    if($('#datathree').hasClass('btn-white')){
        $('#datathree').removeClass('btn-white');
    }
    if($('#datafour').hasClass('btn-white')){
        $('#datafour').removeClass('btn-white');
    }
    if(!$(this).hasClass('btn-white'))
          $(this).addClass('btn-white');
          $('#datasets').attr('src',"https://charts.mongodb.com/charts-hacklytics-qvwug/embed/charts?id=5e09f2b1-de7a-4a70-8220-ea6407591fd5&theme=light&attribution=false");
  });
  $('#datatwo').on('click', function(event) {
    if($('#dataone').hasClass('btn-white')){
        $('#dataone').removeClass('btn-white');
    }
    if($('#datathree').hasClass('btn-white')){
        $('#datathree').removeClass('btn-white');
    }
    if($('#datafour').hasClass('btn-white')){
        $('#datafour').removeClass('btn-white');
    }
    if(!$(this).hasClass('btn-white'))
          $(this).addClass('btn-white');
          $('#datasets').attr('src',"https://charts.mongodb.com/charts-hacklytics-qvwug/embed/charts?id=a3f65dfb-75d6-4caa-acdc-be011ac7e9de&theme=light&attribution=false");
  });
  $('#datathree').on('click', function(event) {
    if($('#datatwo').hasClass('btn-white')){
        $('#datatwo').removeClass('btn-white');
    }
    if($('#dataone').hasClass('btn-white')){
        $('#dataone').removeClass('btn-white');
    }
    if($('#datafour').hasClass('btn-white')){
        $('#datafour').removeClass('btn-white');
    }
    if(!$(this).hasClass('btn-white'))
          $(this).addClass('btn-white');
          $('#datasets').attr('src',"https://charts.mongodb.com/charts-hacklytics-qvwug/embed/charts?id=20546041-098b-4d1f-a048-141b3dfb13e1&theme=light");
  });
  $('#datafour').on('click', function(event) {
    if($('#datatwo').hasClass('btn-white')){
        $('#datatwo').removeClass('btn-white');
    }
    if($('#dataone').hasClass('btn-white')){
        $('#dataone').removeClass('btn-white');
    }
    if($('#datathree').hasClass('btn-white')){
        $('#datathree').removeClass('btn-white');
    }
    if(!$(this).hasClass('btn-white'))
          $(this).addClass('btn-white');
          $('#datasets').attr('src',"regression.png");
  });