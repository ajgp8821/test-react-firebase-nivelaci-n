let input = [{"class":"CristalesVidEspejos","imgId":"../servlet/servlet.ImageServer?id=0154C000000EQeXQAW&&docName=CACBADCGAe55a13803b5e45b5b1ac3b544caa8cf1&&oid=00D4C0000000vyqUAA","name":"CristalesVidEspejos","value":"Cristales, Vidrios y Espejos"},{"class":"IncendioEstructura","imgId":"../servlet/servlet.ImageServer?id=0154C000000EQecQAG&&docName=CACBADCGAf94d3265bcc647e1abd54390d23ec8df&&oid=00D4C0000000vyqUAA","name":"IncendioEstructura","value":"Incendio Estructura"},{"class":"RespCivil","imgId":"../servlet/servlet.ImageServer?id=0154C000000EQehQAG&&docName=CACBADCGA7d94af6e4a3743688738d81960cc241f&&oid=00D4C0000000vyqUAA","name":"RespCivil","value":"Responsabilidad Civil"},{"class":"RoboHurtoBienes","imgId":"../servlet/servlet.ImageServer?id=0154C000000EQemQAG&&docName=CACBADCGAb1aa3010e24d4d1eb0560b1c0594139d&&oid=00D4C0000000vyqUAA","name":"RoboHurtoBienes","value":"Robo y/o hurto de tus bienes"},{"class":"IncendioBienes","imgId":"../servlet/servlet.ImageServer?id=0154C000000EQerQAG&&docName=CACBADCGA77b67b1e327a45509093697be645b0d8&&oid=00D4C0000000vyqUAA","name":"IncendioBienes","value":"Incendio Bienes"}]

console.log(input);

// input.forEach(res => {
//   // var temp = Object.assign({}, res);
//   if(res.name == "CristalesVidEspejos") {
//     res.numero = 123
//   }
//   // return temp;
// })


input.map(obj => {
  if(obj.name == "CristalesVidEspejos") {
    
  }
})
console.log(input);



// var array = [{ 'a': '12', 'b': '10' }, { 'a': '20', 'b': '22' }];

// array.forEach(e => e.c = +e.b - +e.a);

// console.log(JSON.stringify(array));