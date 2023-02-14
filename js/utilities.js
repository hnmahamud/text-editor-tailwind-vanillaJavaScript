const editor = document.getElementById('editor');
const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
const underlineBtn = document.getElementById('underlineBtn');
const upperLowerBtn = document.getElementById('upperLowerBtn');
const leftAlignBtn = document.getElementById('leftAlignBtn');
const centerAlignBtn = document.getElementById('centerAlignBtn');
const rightAlignBtn = document.getElementById('rightAlignBtn');
const justifyAlignBtn = document.getElementById('justifyAlignBtn');
const fontSizeInput = document.getElementById('fontSize');
const colorInput = document.getElementById('color');


/* For Changes Text Style */
function applyChanges(removeClass, addClass, btn) {
    editor.classList.remove(removeClass);
    editor.classList.add(addClass);
    btn.classList.remove('text-gray-500');
    btn.classList.add('bg-gray-200', 'text-gray-900', 'active');
}
function unApplyChanges(removeClass, addClass, btn) {
    editor.classList.remove(removeClass);
    editor.classList.add(addClass);
    btn.classList.remove('bg-gray-200', 'text-gray-900', 'active');
    btn.classList.add('text-gray-500');
}


/* Button and Editor Class Remover */
function btnClassRemover(...args) {
    for (const arg of args) {
        arg.classList.add('text-gray-500');
        arg.classList.remove('bg-gray-200', 'text-gray-900');
    }
}
function editorClassRemover(...args) {
    for (const arg of args) {
        editor.classList.remove(arg);
    }
}


/* Bold and UnBold */
function makeBold(bool) {
    if (bool === true) {
        // applyChanges (removeClass, addClass, btn)
        applyChanges('font-normal', 'font-bold', boldBtn);
    }
    if (bool === false) {
        // unApplyChanges (removeClass, addClass, btn)
        unApplyChanges('font-bold', 'font-normal', boldBtn);
    }
}


/* Italic and UnItalic */
function makeItalic(bool) {
    if (bool === true) {
        // applyChanges (removeClass, addClass, btn)
        applyChanges('not-italic', 'italic', italicBtn);
    }
    if (bool === false) {
        // applyChanges (removeClass, addClass, btn)
        unApplyChanges('italic', 'not-italic', italicBtn);
    }
}


/* Underline and Normal */
function makeUnderline(bool) {
    if (bool === true) {
        // applyChanges (removeClass, addClass, btn)
        applyChanges('no-underline', 'underline', underlineBtn);
    }
    if (bool === false) {
        // applyChanges (removeClass, addClass, btn)
        unApplyChanges('underline', 'no-underline', underlineBtn);
    }
}


/* Uppercase and Lowercase */
function makeUpperLower(bool) {
    if (bool === true) {
        // applyChanges (removeClass, addClass, btn)
        applyChanges('normal-case', 'uppercase', upperLowerBtn);
    }
    if (bool === false) {
        // applyChanges (removeClass, addClass, btn)
        unApplyChanges('uppercase', 'normal-case', upperLowerBtn);
    }
}

/* Left Align */
function makeLeftAlign() {
    // Editor class remove for make Left Align unique.
    editorClassRemover('text-start', 'text-center', 'text-right', 'text-justify');

    // Style for Left Align
    editor.classList.add('text-left');
    leftAlignBtn.classList.remove('text-gray-500');
    leftAlignBtn.classList.add('bg-gray-200', 'text-gray-900');

    // Buttons class remove for make Left Align unique.
    btnClassRemover(centerAlignBtn, rightAlignBtn, justifyAlignBtn);
}


/* Center Align */
function makeCenterAlign() {
    // Editor class remove for make Center Align unique.
    editorClassRemover('text-start', 'text-left', 'text-right', 'text-justify');

    // Style for Center Align
    editor.classList.add('text-center');
    centerAlignBtn.classList.remove('text-gray-500');
    centerAlignBtn.classList.add('bg-gray-200', 'text-gray-900');

    // Buttons class remove for make Center Align unique.
    btnClassRemover(leftAlignBtn, rightAlignBtn, justifyAlignBtn);
}


/* Right Align */
function makeRightAlign() {
    // Editor class remove for make Right Align unique.
    editorClassRemover('text-start', 'text-left', 'text-center', 'text-justify');

    // Style for Right Align
    editor.classList.add('text-right');
    rightAlignBtn.classList.remove('text-gray-500');
    rightAlignBtn.classList.add('bg-gray-200', 'text-gray-900');

    // Buttons class remove for make Right Align unique.
    btnClassRemover(leftAlignBtn, centerAlignBtn, justifyAlignBtn);
}


/* Justify Align */
function makeJustifyAlign() {
    // Editor class remove for make Justify Align unique.
    editorClassRemover('text-start', 'text-left', 'text-right', 'text-center');

    // Style for Justify Align
    editor.classList.add('text-justify');
    justifyAlignBtn.classList.remove('text-gray-500');
    justifyAlignBtn.classList.add('bg-gray-200', 'text-gray-900');

    // Buttons class remove for make Justify Align unique.
    btnClassRemover(leftAlignBtn, centerAlignBtn, rightAlignBtn);
}


/* Set Font Size */
function setFontSize() {
    if (fontSizeInput.value >= 14) {
        editor.style.fontSize = fontSizeInput.value + 'px';
    }
    if (fontSizeInput.value == '') {
        editor.style.fontSize = '14px';
    }
}


/* Set Color */
function setFontColor() {
    editor.style.color = colorInput.value;
}