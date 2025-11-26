const highlightElements = [
    'span1', 'span2', 'span3', 'span4', 'span5',
    'span6', 'span7', 'span8'
];


function toggleHighlight() {
    highlightElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle('highlighted');
        }
    });
}