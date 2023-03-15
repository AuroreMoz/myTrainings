function addBpmTemplate() {
    const bpmContainer = document.getElementById('mt-guidelines-bpm');
    const template = `
<div class="mt-card mt-card-simple-secondary">
    <p>${JSON.stringify(getBpmZone1())}</p>
    <p>${JSON.stringify(getBpmZone2())}</p>
    <p>${JSON.stringify(getBpmZone3())}</p></div>
    `
    bpmContainer.innerHTML = template;

}

function addGuidelineTemplate() {
    const guidelineContainer = document.getElementById('mt-guidelines');

    const guideline = getBestGuideline();

    let template = `
<div class="mt-card mt-card-secondary">
<h1>${guideline.trainingType}</h1>
<h2>${guideline.name}</h2>
<p>${guideline.description}</p>
${(guideline.data && guideline.data.time)?'<p>Durée: ' + guideline.data.time + ' minutes</p>':''}
</div>
`;

guidelineContainer.innerHTML = template;

}

const guidelinesOnClick = () => {

    addBpmTemplate()


    addGuidelineTemplate()
}
