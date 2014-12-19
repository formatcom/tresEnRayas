var jugador = 0;
var tablero = new Array(3);

function iniciar(){
    jugador = 0;
    tablero[0] = [0, 0, 0];
    tablero[1] = [0, 0, 0];
    tablero[2] = [0, 0, 0];
    dibujar();
    console.log('JUEGA: Jugador['+jugador+']');

}

function dibujar(){
    console.log('_____[0]_[1]_[2]_');
    for (var y = 0; y < tablero.length; y++){
        var temp = ' | '; 
        for (var x = 0; x < tablero[y].length; x++){
            temp += tablero[y][x]+' | '; 
        }
        console.log('['+y+']' + temp);
        console.log('_________________');
    }
}

function cambio(){
    //jugador = jugador ? 0 : 1;
    if (jugador == 0)
        jugador = 1;
    else
        jugador = 0;
    dibujar();
    console.log('JUEGA: Jugador['+jugador+']');
}

function jugada(x, y){
    if (tablero[y][x] == 0){
        tablero[y][x] = jugador + 1;
        cambio()
    }else
        console.log('Posicion ya ocupada.')
}

iniciar();