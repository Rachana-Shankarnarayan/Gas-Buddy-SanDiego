L.Map = L.Map.extend({
 	openPopup: function (popup, latlng, options) { 
        if (!(popup instanceof L.Popup)) {
        var content = popup;
        
        popup = new L.Popup(options).setContent(content);
        }
        
        if (latlng) {
        popup.setLatLng(latlng);
        }
        
        if (this.hasLayer(popup)) {
        return this;
        }
        
        //this.closePopup();
        this._popup = popup;
        return this.addLayer(popup);        
    }
});


var map = new L.Map('Map').setView([33.3649, -117.1582], 10);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
  L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; ' + mapLink + ' Contributors',
      maxZoom: 18,
    }).addTo(map)

//L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
  //  maxZoom: 18
//}).addTo(map);

L.marker([32.714027, -117.140487]).addTo(map).bindPopup("<b>Shell,San Diego</b><br /><p> Regular: $6.64<br />Premium: $6.89 <br/>Diesel : $5.80<br/>");

L.marker([32.962730, -117.036240]).addTo(map).bindPopup("<b>Mobil, Poway</b><br /><p> Regular: $6.89<br />Premium: $7.07 <br/>Diesel : $5.08<br/>");

L.marker([32.918476, -117.138237]).addTo(map).bindPopup("<b>Arco, Mira Mesa</b><br /><p> Regular: $6.92<br />Premium: $7.15 <br/>Diesel : $5.68<br/>");

L.marker([32.918476, -117.257767]).addTo(map).bindPopup("<b>Chevron, La Jolla</b><br /><p> Regular: $6.82<br />Premium: $6.87 <br/>Diesel : $5.96<br/>");

L.marker([33.211666, -117.325836]).addTo(map).bindPopup("<b>Valero, Oceanside</b><br /><p> Regular: $6.97<br />Premium: $7.08 <br/>Diesel : $5.99<br/>");