
var timer = {
    h: document.getElementById('hh'),
    m: document.getElementById('mm'),
    s: document.getElementById('ss'),
    ds: document.getElementById('ds')
}

var iniciar = document.getElementById('start');
var reiniciar = document.getElementById('reset');
var marcar = document.getElementById('mark');
var limpar = document.getElementById('clear');

var tempo;
var index = 1;

// Start and Stop
iniciar.onclick = function start(){
    if (iniciar.getAttribute('status') == 'of') {

        // change atributes
        iniciar.setAttribute('status', 'on');
        iniciar.setAttribute('value', 'parar');

        // change time
        tempo = setInterval(function(){
            var dsec = timer.ds.innerText++;
            var sec = timer.s.innerText;
            var min = timer.m.innerText;
            var h = timer.h.innerText;
            if(dsec >= 99){
                timer.ds.innerText = '00';
                timer.s.innerText ++;
            }
            if (sec >= 59) {
                timer.s.innerText = '00';
                timer.m.innerText ++;
            }if(min >= 59){
                timer.m.innerText = '00';
                timer.h.innerText ++;
            }
        }, 10);
    }else{

        // Stop timer
        clearInterval(tempo);

        // change atributes
        iniciar.setAttribute('value', 'iniciar');
        iniciar.setAttribute('status', 'of');
    }

};

// Restart
reiniciar.onclick = function resetar() {
    // Stop timer
    clearInterval(tempo);

    // Reset timer
    timer.h.innerText = '00';
    timer.m.innerText = '00';
    timer.s.innerText = '00';
    timer.ds.innerText = '00';

    // change atributes
    iniciar.setAttribute('value', 'iniciar');
    iniciar.setAttribute('status', 'of');
};

// Mark
marcar.onclick = function mark() {
    var tbody = document.getElementById('corpo-tabela');

    // New Row
    var tr = document.createElement('tr');

    // New colluns
    var th1 = document.createElement('th');
    th1.innerText = index;

    var th2 = document.createElement('th');
    th2.innerText = timer.h.innerText + ' : ' + timer.m.innerText + ' : ' + timer.s.innerText + ' : ' + timer.ds.innerText;

    // add to html
    tr.appendChild(th1);
    tr.appendChild(th2);

    tbody.append(tr);

    index++;
};

limpar.onclick = function clear() {
    const tbody = document.getElementById('corpo-tabela')  
    for (child of tbody.children){
        child.remove();
        clear();
    }

    index = 1;
}


// Theme

const chk = document.getElementById('chk');
const title = document.getElementsByTagName('h1')[0]

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    title.classList.toggle('dark');
});