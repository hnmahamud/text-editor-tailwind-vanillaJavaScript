/* Click Bold Button */
boldBtn.addEventListener('click', function() {
    if(boldBtn.classList.contains('active')) {
        makeBold(false);
    }
    else {
        makeBold(true);
    }
});


/* Click Italic Button */
italicBtn.addEventListener('click', function() {
    if(italicBtn.classList.contains('active')) {
        makeItalic(false);
    }
    else {
        makeItalic(true);
    }
});


/* Click Underline Button */
underlineBtn.addEventListener('click', function() {
    if(underlineBtn.classList.contains('active')) {
        makeUnderline(false);
    }
    else {
        makeUnderline(true);
    }
});


/* Click upperLower Button */
upperLowerBtn.addEventListener('click', function() {
    if(upperLowerBtn.classList.contains('active')) {
        makeUpperLower(false);
    }
    else {
        makeUpperLower(true);
    }
});


/* Click leftAlign Button */
leftAlignBtn.addEventListener('click', function() {
    makeLeftAlign();
});


/* Click centerAlign Button */
centerAlignBtn.addEventListener('click', function() {
    makeCenterAlign();
});


/* Click rightAlign Button */
rightAlignBtn.addEventListener('click', function() {
    makeRightAlign();
});


/* Click justifyAlign Button */
justifyAlignBtn.addEventListener('click', function() {
    makeJustifyAlign();
});


/* Input Font Size */
fontSizeInput.addEventListener('input', function() {
    setFontSize();
});


/* Input Text Color */
colorInput.addEventListener('input', function() {
    setFontColor();
});