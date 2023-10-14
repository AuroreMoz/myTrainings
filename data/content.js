const myTrainings = {
    [TrainingType.FOOTING]: [
        {
            id: 1,
            name: "Footing Zone 2",
            description: "",
            type: TrainingType.FOOTING,
            data: {
                time: 35,
                bpm: {
                    zone: 2
                }
            }
        },
        {
            id: 2,
            name: "Footing Zone 3",
            description: "",
            type: TrainingType.FOOTING,
            data: {
                time: 35,
                bpm: {
                    zone: 3
                }
            }
        },
    ],
    [TrainingType.FRACTIONATED]: [
        {
            id: 7,
            name: "Fractionné 1min/1min",
            description: "10 + 10x(1/1) + 5",
            type: TrainingType.FRACTIONATED,
            data: {
                time: 35,
            }
        },
        {
            id: 8,
            name: "Fractionné 30sec/30sec",
            description: "10 + 2x(8x(30/30)/2 + 5",
            type: TrainingType.FRACTIONATED,
            data: {
                time: 35,
            }
        },
        {
            id: 6,
            name: "Pyramide distance 2500m",
            description: "5 + 200/200,300/200,500/200,700/200,700/200,500/200,300/200,200/200",
            type: TrainingType.FRACTIONATED,
            data: {
                warmup: 5,
                distance: 2500
            }
        },
    ],
    [TrainingType.INTENSIVE]: [
        {
            id: 1,
            name: "Intense Zone 4",
            description: "",
            type: TrainingType.INTENSIVE,
            data: {
                time: 35,
                bpm: {
                    zone: 4
                }
            }
        },
        {
            id: 2,
            name: "Intense 3km",
            description: "",
            type: TrainingType.INTENSIVE,
            data: {
                bpm: {
                    zone: 4
                }
            }
        },
        {
            id: 3,
            name: "Intense 4km",
            description: "",
            type: TrainingType.INTENSIVE,
            data: {
                bpm: {
                    zone: 4
                }
            }
        },
        {
            id: 4,
            name: "Intense 5km",
            description: "",
            type: TrainingType.INTENSIVE,
            data: {
                bpm: {
                    zone: 4
                }
            }
        },
        {
            id: 5,
            name: "Intense 6km",
            description: "",
            type: TrainingType.INTENSIVE,
            data: {
                bpm: {
                    zone: 4
                }
            }
        },
        {
            id: 6,
            name: "Intense Zone 5",
            description: "",
            type: TrainingType.INTENSIVE,
            data: {
                time: 35,
                bpm: {
                    zone: 5
                }
            }
        },
    ],
    [TrainingType.RATE]: [
        {
            id: 4,
            name: "Cadence 170 ppm",
            description: "",
            type: TrainingType.RATE,
            data: {
                rate: 170
            }
        },
        {
            id: 5,
            name: "Cadence 175 ppm",
            description: "",
            type: TrainingType.RATE,
            data: {
                rate: 175
            }
        },

    ]
}

function getTrainingFromTypeAndId(type, id){
    return myTrainings[type].find((training) => training.id === id)
}
