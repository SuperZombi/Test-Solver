// ==UserScript==
// @name         Test Solver
// @version      1.0
// @description
// @match        https://learningapps.org/*
// @icon         data:image/png;base64,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
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    GM_registerMenuCommand("Заполнить", ()=>{
        var frame = document.querySelector('iframe').contentWindow;
        var d = frame.document;
        var model = frame.MODEL;
        model.forEach(e=>{
            let input = d.querySelector(`input[data-model-index='${e.index}']`)
            if (input){
                input.value = e.correctAnswer
            }
            else{
                let button = d.querySelector(`[data-index='${e.index}'][data-value='${e.correctAnswer}']`)
                if (button){button.click()}
            }
        })
    });
})();
