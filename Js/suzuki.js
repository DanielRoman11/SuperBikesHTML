function iniciarMap(){
    var coord = {lat: 35.0176269,lng: 135.7429689};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
/*const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/yamaha?format=json';

const aplicacion = document.querySelector("#productoSuzuki");

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(Element => {
        console.log(Element.Country, Element.City, Element.Adress)
        const tpl = data.map((Element) => `<li>🚶${Element.Country} 📧${Element.City} ${Element.Adress}</li>`);
        aplicacion.innerHTML = `<ul>${tpl}</ul>`
    });
})
*/
