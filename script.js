function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function showContent(sectionId) {
    // Hide all content sections
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("active");
    });

    // Remove "active" class from all buttons
    document.querySelectorAll(".btn-color-2").forEach(button => {
        button.classList.remove("active");
    });

    // Show the selected content
    document.getElementById(sectionId).classList.add("active");

    // Add "active" class to clicked button
    // event.currentTarget.classList.add("active");
}

function showContent(sectionId) {
    // Hide all content sections
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("active");
    });

    // Remove "active" class from all buttons
    document.querySelectorAll(".btn-color-2").forEach(button => {
        button.classList.remove("active");
    });

    // Show the selected content
    document.getElementById(sectionId).classList.add("active");

    // Add "active" class to clicked button
    event.currentTarget.classList.add("active");
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll(".sub-content-section").forEach(section => {
        section.classList.remove("sub-active");
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add("sub-active");
}

function getRadarChartData(data) {
    const labels = Object.keys(data);
    const values = Object.values(data);
    return { labels, values };
}