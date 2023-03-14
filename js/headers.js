const headerScrollTop = {
    template: "./templates/headers/header"
}

const displayHeader = async () => {
    const html = await fetch((headerScrollTop.template)).then((response) => response.text())
    const container = document.getElementById("mmz-header");
    container.innerHTML += html;
}

displayHeader();
