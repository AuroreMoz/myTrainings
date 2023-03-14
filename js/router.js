const siteTitle = "MyTraining"

const routes = {
    404: {
        template: "./templates/pages/404.html",
        title: `404-Not Found | ${siteTitle}`,
        description: "This is the not found page",
    },
    "/": {
        template: "./templates/pages/guidelines.html",
        title: `Guidelines | ${siteTitle}`,
        description: "this is my guidelines page",
        script: () => guidelinesOnClick(),
    },
    "guidelines": {
        template: "./templates/pages/guidelines.html",
        title: `Guidelines | ${siteTitle}`,
        description: "this is my guidelines page",
        script: () => guidelinesOnClick(),
    }
}

const locationHandler = async () => {
    let location = window.location.hash.replace("#", "");
    if(location.length === 0){
        location = "/";
    }

    const route  = routes[location] || routes[404];
    const html = await fetch((route.template)).then((response) => response.text())
    const container = document.getElementById("mmz-content-container");
    container.innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("content", route.description)
    if(route.script){
        route.script();
    }
}

window.addEventListener("hashchange", locationHandler);


locationHandler();
