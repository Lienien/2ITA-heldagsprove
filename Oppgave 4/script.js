const tekst = prompt("Skriv inn tekst", "Hva er bærekraftig utvikling? En utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for at kommende generasjoner skal få dekket sine behov");

if (tekst.includes("bærekraftig") && tekst.includes("bærekraft")) {
    document.write("Teksten inneholder ordet 'bærekraftig' og 'bærekraft'");
} else if (tekst.includes("bærekraftig")) {
    document.write("Teksten inneholder ordet bærekraftig")
} else if (tekst.includes("ødelegger")) {
    document.write("Teksten inneholder ordet 'bærekraft'");
} else {
    document.write("Teksten inneholder verken 'bærekraftig' eller 'bærekraft'");
}