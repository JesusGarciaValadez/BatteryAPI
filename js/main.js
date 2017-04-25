( function () {
  if ( !navigator.getBattery ) {
    alert( "No puedo leer la batería" );
  } else {
    navigator.getBattery().then( function ( battery ) {
      console.log( "La batería está cargando?: " + battery.charging );
      console.log( "Carga de la batería: " + battery.level * 100 + "%" );
      console.log( "Tiempo de carga de la batería: " + battery.chargingTime + " seconds." );
      console.log( "Tiempo de descarga de la batería: " + battery.dischargingTime + " seconds." );
    } );
  }
} )();