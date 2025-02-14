function calcTextAreaHeight() {
    const otherHeight = [...document.querySelectorAll('#tool-bar, #information, #line-navigation')].reduce((acc, elem) => acc + elem.clientHeight, 0);
    console.log(otherHeight);
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach((textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = (document.body.clientHeight - otherHeight - 8) + 'px';
    });
}

export function setupTextArea() {
    window.addEventListener('resize', () => {
        calcTextAreaHeight();
    });
    calcTextAreaHeight();
};