function calculRatio(history, totalCount, goal) {
    const ratio = history.count/totalCount
    return goal - ratio;
}

function getNextTraining(training, activities){
    console.log(history)
    const trainingType = training.trainingType;
    let possibilities = [...myTrainings[trainingType]];
    activities.forEach(activity => {
        possibilities = possibilities.filter(possibility => possibility.id !== activity.id)
        if(possibilities.length === 1){
            return possibilities[0]
        }
    })
    return possibilities[getRandomInt(possibilities.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getBestTraining(localHistory) {
    const trainingTypes = Object.keys(TrainingType);
    const totalCount = localHistory.totalCount;
    const goal = config.goal;

    if(totalCount === 0){
        const defaultTrainingType = TrainingType.FOOTING;
        return {
            trainingType: defaultTrainingType,
            data: [],
            ratio: goal[defaultTrainingType]
        }
    }

    let bestType;
    trainingTypes.forEach(trainingType => {
        const history = localHistory[trainingType];
        const ratio = calculRatio(history, totalCount, goal[trainingType]);
        if(!bestType || ratio > bestType.ratio) {
            bestType = {
                trainingType,
                data: history.data,
                ratio,
            }
        }
    })
    return bestType;
}

function getBestGuidelines(numberOfChoice) {
    const history = getHistoryStorage();
    const bestTrainingType = getBestTraining(history)
    const bestTrainings = []
    for (let i = 0; i < numberOfChoice; i++) {
        bestTrainings.push({
            trainingType: bestTrainingType.trainingType,
            ...getNextTraining(bestTrainingType, [...bestTrainingType.data, ...bestTrainings])
        })
    }
    return bestTrainings;
}

function getGuidelines(){
    let guidelines = getGuidelineStorage();
    const numberOfChoice = config.numberOfGuidelines;
    if(!guidelines || guidelines.length < numberOfChoice){
        guidelines = getBestGuidelines(numberOfChoice)
        setGuidelineStorage(guidelines);
    }
    return guidelines;
}
