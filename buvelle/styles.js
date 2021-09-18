var grieving = true;

var req = document.getElementById("requiem");
var tc = document.getElementById("titlecard");
var t1 = document.getElementById("text1");
var t2 = document.getElementById("text2");
var t3 = document.getElementById("text3");
var titles = ['Angelic', '4ngelic', '4ng3l1c', 'Ang3lic', 'Angel1c', 'Angelichii', 'Angelichihiro', 'Chi[ERROR]']
var over = ['neoN cherrY blossOms', 'CHII', 'cHIi', 'CHIi', 'CHIHIRO', 'NEON CHERRY BLOSSOMS', 'neon cherry blossoms.'];
var text1 = ['CHII (VIRTUOSO, virtuoso, VIRTUOSO, virtuoso, VIRTUOSO, virtuoso), 24, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4'
            , 'FORTISSIMO (...) ... ... ... ... ... ...'
            , '0x0000c 0x000b (0x4, 0x8) addr(3) >> 01101001 00100000 01101000 01100001 01110100 01100101 00100000 01100001 01100010 01110011 01101111 01101100 01110101 01110100 01100101 01101100 01111001 00100000 01100101 01110110 01100101 01110010 01111001 01110100 01101000 01101001 01101110 01100111'
            , '0bsess (OBSESSION) OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION OBSESSION'];
var text2 = ['01101001 00100000 01101000 01100001 01110100 01100101 00100000 01100001 01100010 01110011 01101111 01101100 01110101 01110100 01100101 01101100 01111001 00100000 01100101 01110110 01100101 01110010 01111001 01110100 01101000 01101001 01101110 01100111'
            , 'eu odeio você. sim, você, eu espero que você morra. eu espero do fundo do meu coração que você pereça e, de preferência, que isso lhe cause sofrimento. 0x0000008'
            , '[SYSTEM ERROR]'
            , 'BUFFER OVERFLOW -> 0x0000004 (line 30)'
            , 'LIKES: nothing. HATES: you.'
            , 'This is a step-by-step guide on how to break down the human body from the full figure into serviceable choice cuts of meat. As in any field, there are a number of methods to the practice, and you may wish to view this as a set of suggestions rather than concrete rules. You will notice that the carving of the larger or "commercial" cuts down into smaller specific or "retail" cuts will be only mentioned in passing, and not concentrated upon. Also, the use of human fat and viscera is generally avoided, and left only to the most experimental chef. These choices, along with recipes and serving suggestions, are nearly infinite in variety, and we leave them to you. We\'ve found these guidelines to be simple and functional, but recognize that there is always room for improvement and we welcome your suggestions.'];
var text3 = ['1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4... 1, 2, 3, 4...'
            , 'blood, gore, guts, knives, hatred, rage, abuse, torture, death ~'
            , 'I\'m beggin\', beggin\' you... So put your loving hand out baby... I\'m beggin\', beggin\' you... So put your loving hand out darlin\''];
            var pages = ['Requiem æternam', 'LIBERTE-ME', 'CONSUMA', 'A VERDADE', 'CONTROLE', 'DOMÍNIO'
            , 'um doce lembrete.', 'ÓDIO', 'o fim', 'A MORte', 'A RODA DA FORTUNA'];
function randomInt( min, max ) {
    return Math.floor(Math.random() * ( max - min ) + min);
}

function grieve() {
    if (grieving === true) {
        setTimeout(function() {
            var fs = randomInt(16, 28);
            req.style.fontSize = fs.toString() + "px";
            var stereo = pages[randomInt(0,pages.length-1)];
            if (grieving === true) req.innerHTML = stereo;
            grieve();
        }, 2000);
    }
}

function grieve2() {
    if (grieving === true) {
        setTimeout(function() {
            var stereo = titles[randomInt(0,titles.length-1)];
            if (grieving === true) tc.innerHTML = stereo;
            grieve2();
        }, 6000);
    }
}

grieve();
grieve2();

function crush() {
    if (grieving === false) {
        setTimeout(function() {
            var stereo = over[randomInt(0,over.length-1)];
            tc.innerHTML = stereo;
            crush();
        }, 4000);
    }
}

function crushing() {
    if (grieving === false) {
        setTimeout(function() {
            var stereo = '/media/neon/' + randomInt(0, 8).toString() + '.png';
            document.getElementById("avt").src = stereo;
            crushing();
        }, 4000);
    }
}

function crushing2() {
    if (grieving === false) {
        setTimeout(function() {
            var stereo = text1[randomInt(0,text1.length-1)];
            t1.innerHTML = stereo;
            crushing2();
        }, 5000);
    }
}

function crushing3() {
    if (grieving === false) {
        setTimeout(function() {
            var stereo = text2[randomInt(0,text2.length-1)];
            t2.innerHTML = stereo;
            crushing3();
        }, 6000);
    }
}

function crushing4() {
    if (grieving === false) {
        setTimeout(function() {
            var stereo = text3[randomInt(0,text3.length-1)];
            t3.innerHTML = stereo;
            crushing4();
        }, 4000);
    }
}

function release() {
    grieving = false;
    req.hidden = true;
    tc.style.fontFamily = 'undefined-medium';
    tc.innerHTML = 'ne0n cherry bloss0ms';
    crush();
    document.getElementById('neonaudio').play();
    var tx = document.getElementsByClassName('card-text');
    for (var x = 0; x < tx.length; x++) tx[x].style.color = "lime";
    document.getElementById('cardz').style.borderColor = "red";
    document.getElementById("avt").style.opacity = "50%";
    crushing();
    crushing2();
    crushing3();
    crushing4();
}
