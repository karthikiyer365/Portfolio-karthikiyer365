// Plotly.js Bar Chart Example for Skills Section
var skillsData = [{
    x: ['Python', 'SQL', 'Excel', 'Tableau', 'Git', 'Minitab'],
    y: [85, 70, 75, 60, 65, 60],
    type: 'bar',
    marker: {
        color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
        line: { width: 1.5 }
    }
}];

var layout = {
    title: 'Skill Proficiency',
    xaxis: { title: 'Skills' },
    yaxis: { title: 'Proficiency (%)' },
    plot_bgcolor: '#f4f4f4',
    paper_bgcolor: '#ffffff'
};

// Render Plot
Plotly.newPlot('mySkillsPlot', skillsData, layout, { responsive: true });
