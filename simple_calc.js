import {showOne} from "./calculator";

function smallCalc() {
    const openBtn = document.querySelector('.small_calc__btn');
    const steps = document.querySelectorAll('.small_calc_step');
    const backBtn  = document.querySelector('.small_calc__back');
    const total  = document.querySelector('.small_calc__caunter');

    let middleWalls = 1530,
    middlefloor = 3187,
    areaFloor = 0,
    heightWalls = 0,
    perimetrWals = 0;

    showOne(steps, steps[0], 'hide');

    openBtn.addEventListener('click', () => {
        showOne(steps, steps[1], 'hide');
    });

    backBtn.addEventListener('click', () => {
        showOne(steps, steps[0], 'hide');
    });

    function calcTotal() {
        let walls = Math.round(((heightWalls * perimetrWals) - 1) * middleWalls);
        let floor = Math.round((areaFloor * 2) * middlefloor)

        if(areaFloor > 0 || walls > 0) {
            total.textContent = floor + walls;
        } else {
            total.textContent='0'
        }
    }

    calcTotal();

    function getDinamicInformation(selector) {
        const inputs = document.querySelectorAll(selector);

        inputs.forEach((input) => {
            input.addEventListener('change', () => {

                switch(input.getAttribute('name')) {
                    case 'areaFloor':
                        areaFloor = input.value;
                        break;
                    case 'heightWalls':
                        heightWalls = input.value;
                        break;
                    case 'perimetrWals':
                        perimetrWals = input.value;
                        break;
                }   
                calcTotal();        
            
            });
        })
    
       
    }

    getDinamicInformation('.small_calc__area_input');

}

export default smallCalc;

