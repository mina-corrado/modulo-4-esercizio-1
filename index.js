//# Esercizi

//1. Crea una funziona che calcoli e ritorni la somma di due numeri interi. Se i due valori sono uguali, ritorna il triplo della somma.
function somma(a, b){
    return a===b ? 3*(a+b) : a+b;
}

//2. Crea una funzione che controlli sue numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.
function controllo(a, b){
    return a===50 || b===50 || a+b===50 ? 'true' : 'false';
}

//3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.
function rimuovicarattere(stringa, posizione){
    return stringa.slice(0, posizione) + stringa.slice(posizione+1);
}

//4. Crea una funzione che ritorni il valore più alto tra tre numeri interi.
function max(a, b){
    return a>b ? a : b;
}

// 5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.
function controlla406070100(a, b){
    return ((a>=40 && a<=60) || (a>=70 && a<=100)) && ((b>=40 && b<=60) || (b>=70 && b<=100)) ? 'true' : 'false'; 
}

// 6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. Sia la stringa che il numero devono essere passate come parametri.
function duplica(stringa, volte){
    let risultato = "";
    for (let index = 0; index < volte; index++) {
        risultato+=stringa;
    }
    return risultato;
}

// 7. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.
function controllacittà(città){
    return città.startsWith("Los") || città.startsWith("New") ? città : 'false' ;
}

// 8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. L’array deve essere passato come parametro.
function sommaarray(array){
    let risultato=0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        risultato+=element;
    }
    return risultato;
}

// 9. Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`.
function controllaarray(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element===1 || element===3){
            return "true";
        }
    }
    return "false";
}

// 10. Crea una funzion che controlli che un array di due elementi NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.
function controllaarrayinverso(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element===1 || element===3){
            return "false";
        }
    }
    return "true";
}


// 11. Crea una funzione per trovare la stringa più lunga in un array di stringhe. Passa l’array come parametro e tritorna la strtinga più lunga.
function controllaarraydistringhe(array){
    let stringamax = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.length>stringamax.length){
            stringamax = element;
        }
    }
    return stringamax;
}

// 12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”
function tipoangolo(gradi){
    let risultato = "";
    if (gradi < 90){
        risultato = "acuto";
    }else if (gradi > 90 && gradi<180){
        risultato = "ottuso";
    }else if (gradi === 90){
        risultato = "retto";
    }else if (gradi === 180){
        risultato = "piatto";
    }
    return risultato;
}

// 13. Crea una funzione che trovi e ritorni **l’indice** di del numero più alto in un array passato come parametro.
function ritornaindicemaxarray(array){
    let indicemax = -1;
    let max = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element>max){
            max = element;
            indicemax = index;
        }
    }
    return indicemax;
}

// 14. Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro.
function ritornanumeroparimaxarray(array){
    let maxpari = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element>maxpari && element % 2===0){
            maxpari = element;
        }
    }
    return maxpari;
}

// 15. Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. Ritorna `true` se la condizione è applicata, `false` se non lo è.
function controllapositivonegativo(a, b){
    return (a<0 && b>=0) || (a>=0 && b<0) ? "true" : "false";
}

// 16. Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. 
// Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro.
function nuovastringa(stringa){
    return stringa.length>=3 ? stringa.slice(0,3).toLowerCase() + stringa.slice(3).toUpperCase() : stringa.toUpperCase(); 
}

// 17. Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`.
function verificasomma(a,b){
    return (a+b >= 50) && (a+b <= 80) ? "65" : "80";
}

// 18. Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
// Il numero è divisibile per 3 ⇒ ritorna “Diego”
// Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
// Il numero è divisibile per 7 ⇒ ritorna “Stefano”
// Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.
// ⚠️ Se il numero è divisibile per più di una di queste opzioni, ritorna l’unione delle due stringhe. Es. 15 è divisibile per 3 e per 5, quindi il valore ritornato sarebbe “DiegoRiccardo”.
function numerostringa(numero){
    let stringa = "";
    if (numero % 3 === 0){
        stringa += "Diego";
    }
    if (numero % 5 === 0) {
        stringa += "Riccardo";
    }
    if (numero % 7 === 0) {
        stringa += "Stefano";
    }
    return stringa.length>0 ? stringa : numero 
}

// 19. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.
function acronimo(stringa){
    stringaarray = stringa.split(" ");
    let acronimo = "";
    for (let index = 0; index < stringaarray.length; index++) {
        const element = stringaarray[index];
        acronimo += element.slice(0,1).toUpperCase();
    }
    return acronimo;
}
