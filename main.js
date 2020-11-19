const $btn = document.getElementById('btn-kick');
const $press = document.getElementById('press-smash');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

$press.addEventListener('click', function () {
    console.log('press-smash');
    changeHP(random(10), character);
    changeHP(random(10), enemy);
});

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderProgressbarHP(enemy);
}

<<<<<<< Updated upstream
    let firstRowL = 0;
    let secondRowL = 0;
=======
function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}
>>>>>>> Stashed changes

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

<<<<<<< Updated upstream
        if (firstRow.charAt(i) === 'а') {
            firstRowL++;
        }
    }
=======
function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}
>>>>>>> Stashed changes

function changeHP(count, person) {

<<<<<<< Updated upstream
        if (secondRow.charAt(i) === 'а') {
            secondRowL++;
        }
    }

    if (firstRowL >= secondRowL) {
        return firstRow;
    }
    else {
        return secondRow;
=======
    if (person.damageHP < count) {
        person.damageHP === 0;
        alert('В зале есть доктор? ' + person.name + ' плохо!');
        $btn.disabled = true;
        $press.disabled = true;

    } else {
        person.damageHP -= count;
>>>>>>> Stashed changes
    }

    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();

