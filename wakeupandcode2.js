// Zadania z bloga wakeupandcode z artykułu Sprawdź się! Porcja zadań z JavaScriptu
// https://www.wakeupandcode.pl/sprawdz-sie-porcja-zadan-z-javascriptu/

// Zadanie 1
// Napisz funkcję, która będzie prostą wersją gry “Kamień, papier, nożyce”. Może to być wersja polska lub angielska. Funkcja jako argumenty przyjmuje dwa stringi (“kamień”, “papier” lub “nożyce”), a następnie w formie alertu podaje wynik (czyli np. wypisuje “Gracz nr 1 wygrał” – zakładamy, że gracz numer 1 to osoba, która podała pierwszy string). Jeśli do funkcji zostanie podany nieodpowiedni argument, tj. taki, który nie jest ani kamieniem, ani papierem, ani nożycami, poinformuj o tym gracza wyświetlając alert z tekstem.

// Zadanie 2
// Napisz funkcję, która jako argumenty przyjmuje ciąg liczb. Liczba argumentów może być dowolna, ale nie mniejsza niż 2 (czyli musimy do funkcji podać minimum dwie liczby). Funkcja ma na celu zwrócić liczbę, która jest największa z podanego jako argumenty zbioru. Jeśli do funkcji zostaną podane argumenty, które nie są liczbami, powinien się wyświetlić odpowiedni komunikat informujący o tym, co należy podać do funkcji (w formie alertu lub console.loga).

// Zadanie 3
// Napisz funkcję, która przyjmuje jako argument jakieś słowo. Ma ona wypisać, ile samogłosek zawiera podane słowo. Jeśli do funkcji podano argument, który nie jest typu tekstowego, należy wyświetlić odpowiedni komunikat (w formie alertu lub console.loga).

// Ad. 1

const opcje = ["kamień", "papier", "nożyce"];

function game(string1, string2){
    
    var string1 = prompt('Wybierz jeden z: "kamień", "papier", "nożyce"');
    var string2 = prompt('Wybierz jeden z: "kamień", "papier", "nożyce"');

    opcje.includes(string1) & opcje.includes(string2) ? alert("Gracz nr " + (Math.random() < 0.5 ? string1 : string2) + " wygrał") : alert('Musisz użyć jednego z podanych: "kamień", "papier", "nożyce"');
}

//  Ad. 2