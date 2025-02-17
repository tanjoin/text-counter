export function htmlImageViewer() {
    return `
        <div id="image-viewer">
            <canvas id="image-canvas"></canvas>
        </div>
    `;
};

export function setupImageViewer() {
    const imageViewer = document.querySelector('#image-viewer');
    if (!imageViewer) {
        return;
    }
    imageViewer.addEventListener('click', () => {
        imageViewer.style.display = 'none';
    });
    imageViewer.style.display = 'none';
    const imageCanvas = document.querySelector('#image-canvas');
    if (!imageCanvas) {
        return;
    }
    imageCanvas.width = 0;
    imageCanvas.height = 0;
};

export function updateImageViewer(file) {
    const imageCanvas = document.querySelector('#image-canvas');
    if (!imageCanvas) {
        return;
    }
    const image = new Image();
    image.onload = () => {
        imageCanvas.width = image.width;
        imageCanvas.height = image.height;
        const context = imageCanvas.getContext('2d');
        context.drawImage(image, 0, 0);

        const imageData = context.getImageData(0, 0, image.width, image.height);
        const imageViewer = document.querySelector('#image-viewer');
        if (!imageViewer) {
            return;
        }
        if (!imageData) {
            imageViewer.style.display = 'none';
            return;
        }
        imageViewer.style.display = 'inline-block';
    };
    const imageDataReader = new FileReader();
    imageDataReader.onload = () => {
        image.src = imageDataReader.result;
    };
    imageDataReader.readAsDataURL(file);
};