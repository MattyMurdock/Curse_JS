let message; //variable nombrada message y declarada
message = "Hola"; //variable con el dato string "hola"
// muestra el contenido de la variable con
alert(message);

//alternativa
let message = "hola"; //para ser mas concisos

// lineas multiples
let user = 'John';
let age = 25;
let message = 'Hola';


// multilinea multivariable

let user = 'John',
  age = 25,
  message = 'Hola';
  //alternativa
let user = 'John'
  , age = 25
  , message = 'Hola';

// Modificar la variable
  var mensaje = "hola conchetumadre";
  let message;
  message = 'Hola!'; //valor inicial
  message = 'Mundo!'; // valor alterado
  alert(message);

  // copiar datos de uno y pasarlo a otra

  let hello = 'Hola mundo!';

  let message;

  // copia 'Hola mundo' de la variable "hello" a "message"
  message = hello;

  // Ahora, ambas variables contienen los mismos datos
  alert(hello); // Hola mundo!
  alert(message); // Hola mundo!



// NOMBRAR VARIABLES

let userName; //usando camelcase
let test123; //letras y numeros
let $ = 1; //variable con numero $
let _ = 2; // variable con numero _
alert($ + _); // resultado va ser 3

// incorrectos

let 1a; //un numero primero dara error
let my-name; //no se permiten guiones

// Las constantes en mayusculas
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...cuando debemos elegir un color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// TIPOS DE DATOS

let message = "hola esto es un string";
message = 123456; //ahora es un dato numerico

// numeros
let n = 123;
n = 12.345;
alert(1/0); //Infinity
alert(Infinity); //asimismo
alert("no es un numero"/2); //NaN Tal division es erronea
alert(NaN +1);//NaN
alert(3* NaN);//NaN
alert("not a number"/2-1); //NaN pos eso que da error
console.log(9007199254740991 + 1); //9007199254740992
console.log(9007199254740991 +2); //9007199254740992 dan lo mismo

//la n al final significa que es un bigint
const bigInt = 1234567890123456789012345678901234567890n ;

//string
let str = "Hola";
let str2 = 'comillas simples tambien funciona';
let phrase = `se puede incrustar otro ${str}`;

let name = "oswaldo";
// incrustar una vairable
alert( `Hola, ${name} !` ); //hola Oswaldo !
// incrustar una expresion
alert ( `El resultado es ${1 + 2}` ); //el resultado es 3


//Boolean
let nameFieldChecked = true; //si, el campo name esta marcado.
let ageFieldChecked = false; //no, el campo age no esta marcado.

let isGreater = 4 > 1;
alert( isGreater ); // verdadero

// Valor Null
let age = null;

let edad;
alert(edad); //se mostrara "undefined"

//Operadores

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)



