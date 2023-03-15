const TrainingType = Object.freeze({
    FOOTING:'FOOTING',
    FRACTIONATED:'FRACTIONATED',
    INTENSIVE:'INTENSIVE',
    RATE: 'RATE'})

const config = {
    goal: {
        [TrainingType.FOOTING]: 0.35,
        [TrainingType.FRACTIONATED]: 0.30,
        [TrainingType.INTENSIVE]: 0.20,
        [TrainingType.RATE]: 0.15,

    },
    bpm: 195
}