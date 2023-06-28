
/*ejercicio1*/
function verificar_par(numero)
{
    if(numero % 2 == 0)
    {
        
        console.log("El numero " + numero + " es par.");
    }
    else
    {
        console.log("El numero " + numero + " es impar.");
    }
} 
/*ejercicio 2 */
function encontrar_mayor(numero1,numero2)
{
    if(numero1==numero2)
    {
        console.log("Los numeros son iguales");
    }
    else
    {
        if(numero1>numero2)
        {
            console.log("El numero mayor es:" +numero1);
        }
        else
        {
            console.log("El numero mayor es:" + numero2);
        }
    }
}
/*ejercicio 3 */
function multiplo_5(numero)
{
    if(numero % 5 ==0)
    {
        console.log("El numero " + numero + " es multiplo de 5");
    }
    else
    {
        console.log("El numero " + numero + " no es multiplo de 5");
    }
}
/*ejercicio 4 */
function imprimir_numeros(numero)
{
    for(let i=0; i<numero; i++)
    {
        console.log(i);
    }
}
/*ejercicio 5*/
function imprimir_palabras(palabra,num)
{
    let index=0;
    while(index<num)
    {
        console.log(palabra);
        index++;
    }
}
/*ejercicio 6*/
function imprimir_array(array)
{
    for( let index=0; index < array.length ; index++)
    {
        console.log(array[index]);
    }
}
/*ejercicio 7*/ 
function imprimir_array_posicion5(array)
{
    for( let index=0; index < array.length ; index++)
    {
        if(index !=4)
        {
            console.log(array[index]);
        }
    }
}
/*ejercicio 8*/ 
function imnprimir_multiplicado(array,n)
{
    for( let index=0; index < array.length ; index++)
    {
        console.log(array[index]*n);
    }
}
let array=[0,1,2,3,4,5,6,7,8,9];
console.log("ejercicio1");
verificar_par(9);
console.log("ejercicio2");
encontrar_mayor(7,9);
console.log("ejercicio3");
multiplo_5(250);
console.log("ejercicio4");
imprimir_numeros(8);
console.log("ejercicio5");
imprimir_palabras("Diego",3);
console.log("ejercicio6");
imprimir_array(array);
console.log("ejercicio7");
imprimir_array_posicion5(array)
console.log("ejercicio8");
imnprimir_multiplicado(array,3);
