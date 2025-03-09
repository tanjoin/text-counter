export function htmlJekyllPage() {
    return `
        <div id="jekyll-page">
            <button id="jekyll-page-nikki-button" class="hidden">Jekyll</button>
        </div>
    `;
};

export function setupJekyllPage(onChangeEditorValueListener) {
    const jekyllPageNikkiButton = document.querySelector('#jekyll-page-nikki-button');

    jekyllPageNikkiButton.addEventListener('click', () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);
        const text = `---\nlayout: post\ntitle:  ""\ncategories: unknown\ndate: "${year}-${month}-${day} 00:00:00"\n---\n\n`;
        onChangeEditorValueListener(text);
    });

    const HIDDEN_COMMAND = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
    let length = HIDDEN_COMMAND.length;
    let index = 0;

    document.addEventListener('keydown', (event) => {
        if (event.code === HIDDEN_COMMAND[index]) {
            index++;
            if (index === length) {
                console.log(
                    '%c実績', 
                    'color:white; background-color: blue; padding: 2px 4px; border-radius: 4px;',
                    'Congratulations! You found a hidden command!'
                );
                jekyllPageNikkiButton.classList.remove('hidden');
                index = 0;
            }
        } else {
            index = 0;
        }
    });
};
