const myTrainings = {
    [TrainingType.FOOTING]: [
        {
            id: 1,
            name: "Footing Zone 2",
            description: "",
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
            data: {
                warmup: 5,
                distance: 2500
            }
        },
    ],
    [TrainingType.INTENSIVE]: [
        {
            id: 3,
            name: "Intense Zone 4",
            description: "",
            data: {
                time: 35,
                bpm: {
                    zone: 4
                }
            }
        },
    ],
    [TrainingType.RATE]: [
        {
            id: 4,
            name: "Cadence 170 ppm",
            description: "",
            data: {
                rate: 170
            }
        },
        {
            id: 5,
            name: "Cadence 175 ppm",
            description: "",
            data: {
                rate: 175
            }
        },

    ]
}
