
const elModal = document.querySelector('.modal');
const elBrthd = document.querySelector('.birthday');
const btnC = document.querySelector('#btn_c');
const grittingsA = document.querySelector('.helo');
const grittingsB = document.querySelector('.helo_b');
const inputDate = document.querySelector('.input_date');
const gender = document.querySelector('.gender');
const modalB = document.querySelector('.modal_b');
const inputName = document.querySelector('.input_name');
nameName = document.querySelector('.name_name');
const nameBrthd = document.querySelector('.name_brthd');
let yourName;



gender.addEventListener('change', (ev) => {
    const choise = ev.target.value;

    if (choise === 'woman') {
        elModal.classList.add('show');
    }
    else {
        elModal.classList.remove('show');
    };

    if (choise === 'man') {
        modalB.classList.add('showModalB');
        
    } else {
        modalB.classList.remove('showModalB');
        elBrthd.classList.remove('input');
    };

    if (choise === 'nothing') {
        elModal.classList.remove('showModalB');
        modalB.classList.remove('input');
        elBrthd.classList.remove('input');
    }

});


const askName =  () => {
    inputName.addEventListener('click', (ev) => {
        name = (ev.target.value);
        console.log(name);
    })

}
askName ();


const getFullGreeting = (cname) => {
    const fullGreeting = `${cname}`;
    return fullGreeting;
}
let test = getFullGreeting(name);



nameName.addEventListener('change', () => {
    nameBrthd.innerHTML = `${test}, напишіть рік народження:`;
    elBrthd.classList.add('input');
})


inputName.addEventListener('change', (ev) => {
    test = ev.target.value.charAt(0).toUpperCase() + ev.target.value.slice(1).toLowerCase();
    console.log(test);
    return test;
})

let birthday = 0;

btnC.addEventListener('click', () => {
    inputDate.addEventListener('change', (ev) => {
        birthday  = Number(ev.target.value.substr(0, 4));
        console.log(birthday);
    
    }) 

    const dateNow = new Date();
    let dateToday = dateNow.getFullYear() - birthday;

             if (birthday = 'дд.мм.рррр') {
            grittingsA.classList.remove('helo_a')
            grittingsB.classList.remove('helob')
           } if (dateToday >= 18) {
            grittingsA.classList.add('helo_a')
            grittingsB.classList.remove('helob')
           } if (dateToday < 18) {
            grittingsA.classList.remove('helo_a')
            grittingsB.classList.add('helob')
           } 
            
 });



