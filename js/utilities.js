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
    editor.classList.remove('text-start', 'text-center', 'text-right', 'text-justify');
    editor.classList.add('text-left');
    leftAlignBtn.classList.remove('text-gray-500');
    leftAlignBtn.classList.add('bg-gray-200', 'text-gray-900');
}


/* Center Align */
function makeCenterAlign() {
    editor.classList.remove('text-start', 'text-left', 'text-right', 'text-justify');
    editor.classList.add('text-center');
    centerAlignBtn.classList.remove('text-gray-500');
    centerAlignBtn.classList.add('bg-gray-200', 'text-gray-900');
}


/* Right Align */
function makeRightAlign() {
    editor.classList.remove('text-start', 'text-left', 'text-center', 'text-justify');
    editor.classList.add('text-right');
    rightAlignBtn.classList.remove('text-gray-500');
    rightAlignBtn.classList.add('bg-gray-200', 'text-gray-900');
}


/* Justify Align */
function makeJustifyAlign() {
    editor.classList.remove('text-start', 'text-left', 'text-right', 'text-center');
    editor.classList.add('text-justify');
    justifyAlignBtn.classList.remove('text-gray-500');
    justifyAlignBtn.classList.add('bg-gray-200', 'text-gray-900');
}


function setFontSize () {
    if(fontSizeInput.value >= 14) {
        editor.style.fontSize = fontSizeInput.value + 'px';
    }
    if(fontSizeInput.value == '') {
        editor.style.fontSize = '14px';
    }
}


function setFontColor () {
    editor.style.color = colorInput.value;
}



