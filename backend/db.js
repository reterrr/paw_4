// db.js
const categories = ['funnyJoke', 'lameJoke'];

const funnyJoke = [
    { 'joke': 'Dlaczego komputer poszedł do lekarza?', 'response': 'Bo złapał wirusa.' },
    { 'joke': 'Dlaczego komputer nie może być głodny?', 'response': 'Bo ma pełny dysk.' },
    { 'joke': 'Co mówi jeden bit do drugiego?', 'response': 'Trzymaj się, zaraz będzie przeniesienie.' }
];

const lameJoke = [
    { 'joke': 'Dlaczego programiści preferują noc?', 'response': 'Bo w nocy jest mniej bugów.' },
    { 'joke': 'Jak nazywa się bardzo szybki programista?', 'response': 'Błyskawiczny koder.' }
];

module.exports = {
    categories,
    funnyJoke,
    lameJoke
};

