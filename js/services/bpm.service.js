
function getBpmZone1(){
    const bpmMax = config.bpm;
    return {
        1: {
            min: getFloorMultiply(bpmMax , 0.55),
            max: getFloorMultiply(bpmMax , 0.62)
        },
        2: {
            min: getFloorMultiply(bpmMax , 0.62),
            max: getFloorMultiply(bpmMax , 0.71)
        },
        3: {
            min: getFloorMultiply(bpmMax , 0.71),
            max: getFloorMultiply(bpmMax , 0.8),
        },
        4: {
            min: getFloorMultiply(bpmMax , 0.8),
            max: getFloorMultiply(bpmMax , 0.9),
        },
        5: {
            min: getFloorMultiply(bpmMax , 0.9),
            max: bpmMax,
        }
    }
}

function getBpmZone2(){
    const bpmMax = config.bpm;
    return {
        1: {
            min: getFloorMultiply(bpmMax , 0.6),
            max: getFloorMultiply(bpmMax , 0.66)
        },
        2: {
            min: getFloorMultiply(bpmMax , 0.66),
            max: getFloorMultiply(bpmMax , 0.78)
        },
        3: {
            min: getFloorMultiply(bpmMax , 0.78),
            max: getFloorMultiply(bpmMax , 0.82),
        },
        4: {
            min: getFloorMultiply(bpmMax , 0.82),
            max: getFloorMultiply(bpmMax , 0.92),
        },
        5: {
            min: getFloorMultiply(bpmMax , 0.92),
            max: bpmMax,
        }
    }
}

function getBpmZone3(){
    const bpmMax = config.bpm;
    return {
        1: {
            min: getFloorMultiply(bpmMax , 0.5),
            max: getFloorMultiply(bpmMax , 0.6)
        },
        2: {
            min: getFloorMultiply(bpmMax , 0.6),
            max: getFloorMultiply(bpmMax , 0.7)
        },
        3: {
            min: getFloorMultiply(bpmMax , 0.7),
            max: getFloorMultiply(bpmMax , 0.8),
        },
        4: {
            min: getFloorMultiply(bpmMax , 0.8),
            max: getFloorMultiply(bpmMax , 0.9),
        },
        5: {
            min: getFloorMultiply(bpmMax , 0.9),
            max: bpmMax,
        }
    }
}

function getFloorMultiply(number1, number2){
    return Math.floor(number1 * number2);
}