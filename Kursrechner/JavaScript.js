function Lesen(n) {
    a = document.cookie;
    res = '';

    while (a != '') {
        while (a.substr(0, 1) == ' ') {
            a = a.substr(1, a.length);
        }

        cookiename = a.substring(0, a.indexOf('='));

        if (a.indexOf(';') != -1) {
            cookiewert = a.substring(a.indexOf('=') + 1, a.indexOf(';'));
        }
        else {
            cookiewert = a.substr(a.indexOf('=') + 1, a.length);
        }

        if (n == cookiename) {
            res = cookiewert;
        }

        i = a.indexOf(';') + 1;

        if (i == 0) {
            i = a.length
        }

        a = a.substring(i, a.length);
    }

    return (res)
}


$(document).ready(function () {
    var textf = '';
    var textd = '';
    var textz = '';
    var texts = '';
	var test = '';
    
    

    facher = new Array('de', 'en', 'fr', 'la', 'it', 'bk', 'mu', 'lt', 'li', 'ma', 'nw', 'bi', 'ch', 'ph', 'vk', 'in', 'gs', 'gg', 'gm', 'mg', 're', 'et', 'wi', 'pi', 'ps', 'sm', 'sp');
    namen = new Array('Deutsch', 'Englisch', 'Französisch', 'Latein', 'Italienisch', 'Bildende Kunst', 'Musik', 'Literatur und Theater', 'Literatur', 'Mathe', 'NwT', 'Biologie', 'Chemie', 'Physik', 'Vertiefungskurs Mathe', 'Informatik', 'Geschichte', 'Geographie', 'Gemeinschaftskunde', 'Geographie / Gemeinschaftskunde', 'Religion', 'Ethik', 'Wirtschaft', 'Philosophie', 'Psychologie', 'Seminarkurs', 'Sport');

    var string = Lesen("faecher");
    var array = [];
    if (string == "") {
        array = [];
    } else {
        array = string.split(",", 50);
    }

    var string = Lesen("mund");
    var mund = [];
    if (string == "") {
        mund = [];
    } else {
        mund = string.split(",", 50);
    }

    for (var i in array) {
        if (mund.includes(array[i].replace(/[0-9]/g, ''))) {
            if (array[i].includes('4')) {
                continue;
            }
            if (array[i].includes('3')) {

                var temp = Lesen("mg");
                if (temp == 0) {
                    textz = textz + "Gm/GG 2 Std." + '<br />';
                }
                if (temp == 1) {
                    texts = texts + "Gm/GG 20|0|2|2* Std." + '<br />';
                }
                if (temp == 2) {
                    texts = texts + "Gm/GG 0|0|2|2* Std." + '<br />';
                }
                if (temp == 3) {
                    texts = texts + "Gm/GG 0|2|2|0* Std." + '<br />';
                }

            }
            if (array[i].includes('bk') || array[i].includes('mu')) {
                //2222
                var temp = array[i].replace("2", "");
                textz = textz + namen[facher.indexOf(temp)] + " 2 Std. + mündliches Abitur" + '<br />';
            }
            if (array[i].includes('lt') || array[i].includes('pi') || array[i].includes('ps')) {
                //2200
                var temp = array[i].replace("2", "");
                textz = textz + namen[facher.indexOf(temp)] + " 2|2|0|0* Std. + mündliches Abitur" + '<br />';
            }
            if (array[i].includes('li') || array[i].includes('re') || array[i].includes('et') || array[i].includes('sp') || array[i].includes('vk') || array[i].includes('in') || array[i].includes('ge') || array[i].includes('gs')) {
                //2222
                var temp = array[i].replace("2", "");
                textz = textz + namen[facher.indexOf(temp)] + " 2 Std. + mündliches Abitur" + '<br />';
            }
            if (array[i].includes('sm')) {
                //3300
                var temp = array[i].replace("2", "");
                textz = textz + namen[facher.indexOf(temp)] + " 3|3|0|0* Std. + mündliches Abitur" + '<br />';
            }
            if (array[i].includes('en') || array[i].includes('fr') || array[i].includes('la') || array[i].includes('it') || array[i].includes('nw') || array[i].includes('bi') || array[i].includes('ph') || array[i].includes('ch')) {
                //3333
                var temp = array[i].replace("2", "");
                textd = textd + namen[facher.indexOf(temp)] + " 3 Std. + mündliches Abitur" + '<br />';
            }
            continue;
        }
        if (array[i].includes('1')) {
            var temp = array[i].replace("1", "");
            textf = textf + namen[facher.indexOf(temp)] + " 5 Std." + '<br />';
        }
        if (array[i].includes('2')) {
            if (array[i].includes('de') || array[i].includes('ma')) {
                var temp = array[i].replace("2", "");
                textd = textd + namen[facher.indexOf(temp)] + " 3 Std. + mündliches Abitur" + '<br />';
                continue;
            }
            if (array[i].includes('bk') || array[i].includes('mu')) {
                //2222
                var temp = array[i].replace("2", "");
                textz = textz + namen[facher.indexOf(temp)] + " 2 Std." + '<br />';
            }
            if (array[i].includes('lt') || array[i].includes('pi') || array[i].includes('ps')) {
                //2200
                var temp = array[i].replace("2", "");
                textz = textz + namen[facher.indexOf(temp)] + " 2|2|0|0* Std." + '<br />';
            }
            if (array[i].includes('li') || array[i].includes('re') || array[i].includes('et') || array[i].includes('sp') || array[i].includes('vk') || array[i].includes('in') || array[i].includes('ge') || array[i].includes('gs')) {
                //2222
                var temp = array[i].replace("2", "");
                textz = textz + namen[facher.indexOf(temp)] + " 2 Std." + '<br />';
            }
            if (array[i].includes('sm')) {
                //3300
                var temp = array[i].replace("2", "");
                textz = textz + namen[facher.indexOf(temp)] + " 3|3|0|0* Std." + '<br />';
            }
            if (array[i].includes('en') || array[i].includes('fr') || array[i].includes('la') || array[i].includes('it') || array[i].includes('nw') || array[i].includes('bi') || array[i].includes('ph') || array[i].includes('ch')) {
                //3333
                var temp = array[i].replace("2", "");
                textd = textd + namen[facher.indexOf(temp)] + " 3 Std." + '<br />';
            }
            
            
        }
        if (array[i].includes('3')) {
            
            var temp = Lesen("mg");
            if (temp == 0) {
                textz = textz + "Gm/GG 2 Std." + '<br />';
            }
            if (temp == 1) {
                texts = texts + "Gm/GG 20|0|2|2* Std." + '<br />';
            }
            if (temp == 2) {
                texts = texts + "Gm/GG 0|0|2|2* Std." + '<br />';
            }
            if (temp == 3) {
                texts = texts + "Gm/GG 0|2|2|0* Std." + '<br />';
            }
            
        }
        
    }
    
	
	test = 'Kurse:' + Lesen('stda') + ' Wochenstunden:' + Lesen('stdb');
    document.getElementById('fstd').innerHTML = textf;
    document.getElementById('dstd').innerHTML = textd;
    document.getElementById('zstd').innerHTML = textz;
    document.getElementById('sstd').innerHTML = texts;
	document.getElementById('stunden').innerHTML = test;
    window.print();

});

function button() {
    window.alert(document.getElementById('anzeigen').clientHeight);
}

////$(document).ready(function () {
////    FächerI = new Array('de', 'en', 'fr', 'la', 'it', 'bk', 'mu', 'lt', 'l', 'ma', 'bi', 'ch', 'ph', 'vkm', 'if', 'ge', 'gs', 'gg', 're', 'et', 'pi', 'ps', 'sm');
//   StundenI = new Array('3', '3', '9', '9', '3', '2', '2', '2', '2');
//    HjI = new Array('1', '1', '1', '1', '1', '1', '1', '2', '3');
//    //1 immer 2 wählbar erstes und zweites 3 nur erstes

//    FächerII = new Array('gs', 'gg', 're', 'et', 'pi', 'ps', 'sm', 'sp');
//    StundenII = new Array('2', '2', '2', '2', '2', '2', '3');
//    HjII = new Array('1', '1', '1', '1', '2', '2', '2');
//    //1 immer 2 wählbar erstes und zweites 3 nur ersten zwei


//    FächerII = new Array('ma', 'bi', 'ch', 'ph', 'vkm', 'if', 'ge');
//    StundenII = new Array('3', '3', '3', '3', '2', '2', '2');
//    HjII = new Array('1', '1', '1', '1', '2', '1', '3');
//    //1 immer 2 wählbar erstes und zweites 3 nur ersten zwei
//}