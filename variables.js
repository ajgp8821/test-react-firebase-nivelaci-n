
/* const Persona = {
  nombre: 'Alejandro',
  apellido: 'Gil',
  hijo: [
    {
      nombre: 'Violetha',
      edad: 7
    },
    {
      nombre: 'Diego',
      edad: 2
    }
  ]
};

const {nombre, edad} = Persona.hijo[0];
console.log(nombre) */


/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(e => console.log(e)); */

/* const getUser = async() => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
console.log('1');
getUser();
console.log('2'); */

const getDate = () => {
  var hoy = new Date();
  var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
  var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
  var fechaYHora = fecha + ' ' + hora;
  //Obteniendo una variable con la máscara d-m-Y H:i:s
  console.log(fechaYHora);
}

const getDate2 = () => {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ms = today.getMilliseconds();
  //let m = checkTime(m);
  //let s = checkTime(s);
  //let document.getElementById('reloj').innerHTML=h+":"+m+":"+s + ":" + ms;
  //let t = setTimeout('startTime()',500);
  console.log(h + ":" + m + ":" + s + ":" + ms);
  return {
    today: today,
    string: h + ":" + m + ":" + s + ":" + ms
  }
}

const datos = [
  { nombre: 'Ale', edad: 32 },
  { nombre: 'Kare', edad: 30 },
  { nombre: 'Jesús', edad: 28 }
];

const uno = getDate2();
datos.forEach( elemento => {
  console.log(elemento);
});
const dos = getDate2();
console.log(dos.today - uno.today);
datos.map( elemento => {
  console.log(elemento);
});
const tres = getDate2();
console.log(tres.today - dos.today);





