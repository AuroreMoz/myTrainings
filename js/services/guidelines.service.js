function calculRatio(history, totalCount, goal) {
    const ratio = history.count/totalCount
    return goal - ratio;
}

function getNextTraining(training, activities){
    console.log(history)
    const trainingType = training.trainingType;
    const allPossibilities = [...myTrainings[trainingType]];
    let possibilities = [...allPossibilities];
    activities.forEach(activity => {
        possibilities = possibilities.filter(possibility => possibility.id !== activity.id)

        if(possibilities.length === 1){
            return possibilities[0]
        }
        if(possibilities.length === 0) {
            possibilities = [...allPossibilities];
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

    console.log('totalCount', localHistory)

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
        console.log(trainingType, ratio)
        if(!bestType || ratio > bestType.ratio) {
            console.log('ici')
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
        const nextTraining = getNextTraining(bestTrainingType, [...bestTrainingType.data, ...bestTrainings]);
        if(nextTraining) bestTrainings.push(nextTraining);
    }
    return bestTrainings;
}

function getGuidelines(){
    let guidelines = getGuidelineStorage();
    if(!guidelines || !guidelines.length){
        const numberOfChoice = config.numberOfGuidelines;
        guidelines = getBestGuidelines(numberOfChoice)
        setGuidelineStorage(guidelines);
    }
    return guidelines;
}

