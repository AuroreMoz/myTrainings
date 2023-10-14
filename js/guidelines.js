function addBpmTemplate() {
    const bpmContainer = document.getElementById('mt-guidelines-bpm');
    bpmContainer.innerHTML = `
<div class="mt-card mt-card-simple-secondary">
    <p>${JSON.stringify(getBpmZone1())}</p>
    <p>${JSON.stringify(getBpmZone2())}</p>
    <p>${JSON.stringify(getBpmZone3())}</p></div>
    `
}

function getGuidelineTemplate(guideline) {
    return `
<div id="mt-guideline-${guideline.type}-${guideline.id}" >
<div onclick="openAddTraining('${guideline.type}', ${guideline.id})" class="mt-card mt-card__${guideline.type.toLowerCase()}">
<h1>${guideline.type}</h1>
<h2>${guideline.name}</h2>
${(guideline.data && guideline.data.time) ? '<p>Durée: ' + guideline.data.time + ' minutes</p>' : ''}
<p>${guideline.description}</p>
</div>
</div>
`;
}

function addGuidelineTemplate(template) {
    const guidelineContainer = document.getElementById('mt-guidelines');
    guidelineContainer.innerHTML = template;
}

function getAddTrainingTemplate(training) {
    return `
        <div class="mt-card mt-card-simple__${training.type.toLowerCase()}">
        <h1>${training.type}</h1>
        <h2>${training.name}</h2>
         <div class="mt-add-training__form">
            <div class="mt-add-training__item">
                <label for="distance">Distance</label>
                <input type="text" name="distance" id="mt-add-training-distance__${training.type}-${training.id}" placeholder="5.5">
            </div>
            <div class="mt-add-training__item">
                <label for="temps">Temps</label>
                <input type="text" name="temps" id="mt-add-training-temps__${training.type}-${training.id}" placeholder="mm:ss">
            </div>
            <div class="mt-add-training__item">
                <label for="allure">Allure</label>
                <input type="text" name="allure" id="mt-add-training-allure__${training.type}-${training.id}" placeholder="mm:ss">
            </div>
            <div class="mt-add-training__item">
                <label for="bpm">BPM</label>
                <input type="text" name="bpm" id="mt-add-training-bpm__${training.type}-${training.id}">
            </div> 
            <div class="mt-add-training__item">
                <label for="cadence">Cadence</label>
                <input type="text" name="cadence" id="mt-add-training-cadence__${training.type}-${training.id}">
            </div> 
            <div class="mt-add-training__item">
                <label for="date">Date</label>
                <input type="text" name="date" id="mt-add-training-date__${training.type}-${training.id}" placeholder="jj/mm/aa">
            </div> 
        </div>
        <div class="mt-add-training__action">
            <button class="mt-add-training__button mt-card__${training.type.toLowerCase()}" onclick="closeAddTraining('${training.type}', ${training.id})">Annuler</button>
            <button class="mt-add-training__button mt-card__${training.type.toLowerCase()}" onclick="addTraining('${training.type}', ${training.id})">Valider</button>
        </div>
        </div>
    `;
}

function openAddTraining(type, id) {
    const trainingToAdd = getTrainingFromTypeAndId(type, id)
    const selectedGuideline = document.getElementById(`mt-guideline-${type}-${id}`);
    selectedGuideline.innerHTML = getAddTrainingTemplate(trainingToAdd)
}

function addTraining(type, id) {
    const history = getHistoryStorage();
    function getTrainingFormValue() {
        return {
            temps: document.getElementById(`mt-add-training-temps__${type}-${id}`).value,
            distance: document.getElementById(`mt-add-training-distance__${type}-${id}`).value,
            bpm: document.getElementById(`mt-add-training-bpm__${type}-${id}`).value,
            allure: document.getElementById(`mt-add-training-allure__${type}-${id}`).value,
            cadence: document.getElementById(`mt-add-training-cadence__${type}-${id}`).value,
            date: document.getElementById(`mt-add-training-date__${type}-${id}`).value
        }
    }

    const {distance, temps, bpm, allure, cadence, date} = getTrainingFormValue()
    history[type].data.push({id, distance, temps, bpm, allure, cadence, date});
    history.totalCount += 1;
    history[type].count += 1;
    setHistoryStorage(history)
    setGuidelineStorage([]);
    guidelinesPage()
}

function closeAddTraining(type, id) {
    const guideline = getTrainingFromTypeAndId(type, id)
    const selectedGuideline = document.getElementById(`mt-guideline-${type}-${id}`);
    selectedGuideline.innerHTML = getGuidelineTemplate(guideline)
}

function displayGuidelines(guidelines) {
    let templates = "";
    guidelines.forEach((guideline) => templates += getGuidelineTemplate(guideline))
    addGuidelineTemplate(templates)
}

const guidelinesPage = () => {
    const guidelines = getGuidelines();
    displayGuidelines(guidelines);
    addBpmTemplate()

}
