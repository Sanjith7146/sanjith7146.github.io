let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null,
    scale = 1.5;

const canvas = document.querySelector('#pdf-render'),
      ctx = canvas.getContext('2d');

function renderPage(num) {
    // ... (keep the existing renderPage function)
}

function queueRenderPage(num) {
    // ... (keep the existing queueRenderPage function)
}

function showPrevPage() {
    // ... (keep the existing showPrevPage function)
}

function showNextPage() {
    // ... (keep the existing showNextPage function)
}

function zoomIn() {
    // ... (keep the existing zoomIn function)
}

function zoomOut() {
    // ... (keep the existing zoomOut function)
}

document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);
document.querySelector('#zoom-in').addEventListener('click', zoomIn);
document.querySelector('#zoom-out').addEventListener('click', zoomOut);

document.querySelector('#go-to-page').addEventListener('click', () => {
    // ... (keep the existing go-to-page functionality)
});

function loadPDF(pdfURL) {
    pdfjsLib.getDocument(pdfURL).promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        document.querySelector('#page-num').textContent = pageNum;
        renderPage(pageNum);
    });
}

// Export the loadPDF function to make it accessible
window.loadPDF = loadPDF;

// To load a PDF when a button is clicked
document.getElementById('LoadCV').addEventListener('click', function() {
    loadPDF('assets/PDFs/CV.pdf');
});

// To load a PDF when the page loads
window.addEventListener('load', function() {
    loadPDF('https://sanjith.net/assets/PDFs/CV.pdf');
});
