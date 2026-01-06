// Operadores basicos y aritmeticos

// unitario
let x = 1;

x = x;
alert(x); //-1 se aplico negacion unaria.

// Binario

let x = 1, y= 3;
alert( y - x); //2, binario negativo resta valores

// Airmeticas
// para la suma se usa +

// Resta
alert( 5 % 2 ); // 1, es el resto de 5 dividido por 2
alert( 8 % 3 ); // 2, es el resto de 8 dividido por 3
alert( 8 % 4 ); // 0, es el resto de 8 dividido por 4

// Exponenciacion
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (potencia de 1/2 es lo mismo que raíz cuadrada)
alert( 8 ** (1/3) ); // 2 (potencia de 1/3 es lo mismo que raíz cúbica)

// Concatenaciones de cadenas para el bianrio
let s ="Mio la tornado la " + "string";
alert(s); // Mia la tornado la string

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" y no "221"

alert('1' + 2 + 2); // "122", no es "14"

alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3

//conversiones numericas, unitarios +
// Sin efecto en números
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Convierte los no números
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", el binario suma concatena las cadenas

let apples = "2";
let oranges = "3";

// ambos valores convertidos a números antes del operador binario suma
alert( +apples + +oranges ); // 5

// la variante más larga
// alert( Number(apples) + Number(oranges) ); // 5



// ASIGNACION

let x = 2 * 2 + 1;

alert( x ); // 5



