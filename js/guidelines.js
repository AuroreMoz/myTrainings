function addBpmTemplate() {
    const bpmContainer = document.getElementById('mt-guidelines-bpm');
    bpmContainer.innerHTML = `
<div class="mt-card mt-card-simple-secondary">
    <p>${JSON.stringify(getBpmZone1())}</p>
    <p>${JSON.stringify(getBpmZone2())}</p>
    <p>${JSON.stringify(getBpmZone3())}</p></div>
    `
}

function addGuidelineTemplate(guideline) {
    const guidelineContainer = document.getElementById('mt-guidelines');
    guidelineContainer.innerHTML += `
<div class="mt-card mt-card-secondary">
<h1>${guideline.trainingType}</h1>
<h2>${guideline.name}</h2>
<p>${guideline.description}</p>
${(guideline.data && guideline.data.time)?'<p>Durée: ' + guideline.data.time + ' minutes</p>':''}
</div>
`;
}

const guidelinesOnClick = () => {

    const guidelines = getGuidelines();
    guidelines.forEach((guideline) => addGuidelineTemplate(guideline))

    addBpmTemplate()

}
