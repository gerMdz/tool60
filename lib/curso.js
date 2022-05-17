
$('#subtitle').arctext({radius: 400})

let saludo = $('#saludo');

const saludos = ['Hola Ger', 'Bienvenido a este sitio', 'Planets malfunction from alignments like terrifying phenomenans.'];

let actual = 0;



setInterval( function () {
    actual ++;
    if( actual >= saludos.length){
        actual = 0;
    }
    saludo.shuffleLetters({
        'text': saludos[actual]
    })
}, 3000);