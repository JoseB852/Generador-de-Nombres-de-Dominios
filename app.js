
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let indice = 0; indice < pronoun.length; indice++) {
    for( let a = 0; a < adj.length; a++) {
        for (let b = 0; b < noun.length; b++) {
            console.log(pronoun[indice] + adj[a] + noun [b] +  ".com" )
        }
    }
}