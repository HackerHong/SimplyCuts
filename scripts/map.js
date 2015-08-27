function initialize() {
  var mapCanvas = document.getElementById('map');
  var myLatLng = {lat: 37.800041, lng: -122.441814};

  var mapOptions = {
    center: myLatLng,
    zoom: 15,
    disableDoubleClickZoom: true,
    draggable: false,
    mapTypeControl: false,
    overviewMapControl: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    scrollwheel: false,
    streetViewControl: false,
    zoomControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var contentString = '<h3>Simply Cuts</h3>'+
      '<p>2335 Chestnut Street</p>' +
      '<p>San Francisco, CA 94123</p>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Simply Cuts'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
