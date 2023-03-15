function getLocalHistory() {
    const history = localStorage.getItem("history") || JSON.stringify(emptyHistory);
    return JSON.parse(history)
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