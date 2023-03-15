function calculRatio(history, totalCount, goal) {
    const ratio = history.count/totalCount
    return goal - ratio;
}

function getBestTraining(localHistory) {
    const trainingTypes = Object.keys(TrainingType);
    const totalCount = localHistory.totalCount;
    const goal = config.goal;

    if(totalCount === 0){
        return {
            trainingType: goal.default,
            data: []
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

function getBestGuideline() {
    const history = getLocalHistory();
    const bestTrainingType = getBestTraining(history)
    const bestTraining = getNextTraining(bestTrainingType);
    bestTraining.trainingType = bestTrainingType.trainingType

    return bestTraining;
}