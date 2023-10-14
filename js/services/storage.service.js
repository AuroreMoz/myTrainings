function getHistoryStorage() {
    let history = localStorage.getItem('history');
    if(!history){
        history = JSON.stringify(emptyHistory);
        localStorage.setItem('history', history);
    }
    return JSON.parse(history)
}

function setHistoryStorage(history) {
    localStorage.setItem('history', JSON.stringify(history))
}

function setGuidelineStorage(guideline){
    localStorage.setItem('guideline', JSON.stringify(guideline))
}

function getGuidelineStorage(){
    return JSON.parse(localStorage.getItem('guideline'))
}

const emptyHistory = {
    totalCount: 0,
    [TrainingType.FOOTING]: {
        count: 0,
        data: [],
    },
    [TrainingType.FRACTIONATED]: {
        count: 0,
        data: [],
    },
    [TrainingType.INTENSIVE]: {
        count: 0,
        data: [],
    },
    [TrainingType.RATE]: {
        count: 0,
        data: [],
    }
}

/*
format:
{
    totalCount: 1,
    footing: {
        count: 1,
        data: [
            {
                date: "2023-02-22",
                duration: "31",
                distance: "4.4",
                counter: 1,
                trainingId: 1,
            },
            ...
        ]
    },
    ...
}
 */