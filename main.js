let face = document.getElementById("face");
let eye1 = document.getElementById("eye1");
let eye2 = document.getElementById("eye2");
let mouth = document.getElementById("mouth");

let faceEditor = document.getElementById("face-editor-textarea");
let eye1Editor = document.getElementById("eye1-editor-textarea");
let eye2Editor = document.getElementById("eye2-editor-textarea");
let mouthEditor = document.getElementById("mouth-editor-textarea");

let applyChangesBtn = document.getElementById("apply-changes");
let resetChangesBtn = document.getElementById("reset-changes");
let amplyAreaBtn = document.getElementById("amply-area");
let exportCodeBtn = document.getElementById("export-code");

let exportResults = document.getElementById("export-results");

let reset = 0;
let codeSelected = "";
let amplied = false;

/*

CONTINUAR CON EXPORTAR CODIGO ABAJO DE TODO!

*/

// Key Listeners

applyChangesBtn.addEventListener("click", () => {
    applyChanges();
    document.getElementById("face-display").style.display = "block";
    document.getElementById("eye1-display").style.display = "block";
    document.getElementById("eye2-display").style.display = "block";
    document.getElementById("mouth-display").style.display = "block";
});

document.addEventListener('click', () => {
    if (codeSelected == "") {
        amplyAreaBtn.style.color = "#222";
        amplyAreaBtn.style.border = "5px solid #222";
    }else{
        amplyAreaBtn.style.color = "#000";
        amplyAreaBtn.style.border = "5px solid #000";
    }

    if (codeSelected == "face") {
        document.getElementById("face-display").style.color = "#00f";
        document.getElementById("eye1-display").style.color = "#0f0";
        document.getElementById("eye2-display").style.color = "#0f0";
        document.getElementById("mouth-display").style.color = "#0f0";
    }else if (codeSelected == "eye1") {
        document.getElementById("face-display").style.color = "#0f0";
        document.getElementById("eye1-display").style.color = "#00f";
        document.getElementById("eye2-display").style.color = "#0f0";
        document.getElementById("mouth-display").style.color = "#0f0";
    }else if (codeSelected == "eye2") {
        document.getElementById("face-display").style.color = "#0f0";
        document.getElementById("eye1-display").style.color = "#0f0";
        document.getElementById("eye2-display").style.color = "#00f";
        document.getElementById("mouth-display").style.color = "#0f0";
    }else if (codeSelected == "mouth") {
        document.getElementById("face-display").style.color = "#0f0";
        document.getElementById("eye1-display").style.color = "#0f0";
        document.getElementById("eye2-display").style.color = "#0f0";
        document.getElementById("mouth-display").style.color = "#00f";
    }
})

document.addEventListener('keydown', (event) => {
    applyChanges();
});

applyChangesBtn.addEventListener('click', () => {
    if (reset != 1) {
        applyChanges();
    }else{
        reset = 0;
        resetChangesBtn.value = "Resetear codigo";
        resetChangesBtn.style.border = "5px solid #000";
        resetChangesBtn.style.color = "#000";

        applyChangesBtn.value = "Aplicar cambios";
        applyChangesBtn.style.border = "5px solid #000";
        applyChangesBtn.style.color = "#000";
    }
});

resetChangesBtn.addEventListener('click', () => {
    reset++;
    if (reset != 2) {
        resetChangesBtn.value = "¡Presiona otra vez para confirmar!";
        resetChangesBtn.style.border = "5px solid #f00";
        resetChangesBtn.style.color = "#f00";

        applyChangesBtn.value = "¡Presiona para cancelar el reseteo!";
        applyChangesBtn.style.border = "5px solid #0f0";
        applyChangesBtn.style.color = "#0f0";
    }else{
        resetChanges();
    }
});

amplyAreaBtn.addEventListener('click', () => {
    console.log(amplied);
    let faceE = document.getElementById("face-editor");
    let eye1E = document.getElementById("eye1-editor");
    let eye2E = document.getElementById("eye2-editor");
    let mouthE = document.getElementById("mouth-editor");

    if (!amplied) {
        if (codeSelected == "") {
            alert("Selecciona un codigo para ampliarlo y editarlo con mas comodidad");
        }else if (codeSelected == "face") {
            eye1E.style.display = "none";
            eye2E.style.display = "none";
            mouthE.style.display = "none";

            faceE.style.width = "100%";
            document.getElementById("face-display").style.display = "block";
        }else if (codeSelected == "eye1") {
            faceE.style.display = "none";
            eye2E.style.display = "none";
            mouthE.style.display = "none";

            eye1E.style.width = "100%";
            document.getElementById("eye1-display").style.display = "block";

        }else if (codeSelected == "eye2") {
            eye1E.style.display = "none";
            faceE.style.display = "none";
            mouthE.style.display = "none";

            eye2E.style.width = "100%";
            document.getElementById("eye2-display").style.display = "block";
        }else if (codeSelected == "mouth") {
            eye1E.style.display = "none";
            eye2E.style.display = "none";
            faceE.style.display = "none";

            mouthE.style.width = "100%";
            document.getElementById("mouth-display").style.display = "block";
        }

        amplyAreaBtn.value = "Ver todos los codigos"
        amplied = true;
    }else{
        eye1E.style.display = "block";
        eye2E.style.display = "block";
        faceE.style.display = "block";
        mouthE.style.display = "block";

        faceE.style.width = "25%";
        eye1E.style.width = "25%";
        eye2E.style.width = "25%";
        mouthE.style.width = "25%";

        amplied = false;
        amplyAreaBtn.value = "Ver solo codigo seleccionado"
    }
});

exportCodeBtn.addEventListener('click', () => {
    exportResults.value += `HTML: <br>`
    exportResults.value += 
    `<div id="face">
        <div id="eye1"></div>
        <div id="eye2"></div>

        <div id="mouth"></div>
    </div>`
});

// Face
document.getElementById("face-editor").onclick = () => {
    codeSelected = "face";
    document.getElementById("face-display").style.display = "none";

    document.getElementById("eye1-display").style.display = "block";
    document.getElementById("eye2-display").style.display = "block";
    document.getElementById("mouth-display").style.display = "block";
};

// Eye1
document.getElementById("eye1-editor").onclick = () => {
    codeSelected = "eye1";
    document.getElementById("eye1-display").style.display = "none";

    document.getElementById("face-display").style.display = "block";
    document.getElementById("eye2-display").style.display = "block";
    document.getElementById("mouth-display").style.display = "block";
};

// Eye2
document.getElementById("eye2-editor").onclick = () => {
    codeSelected = "eye2";
    document.getElementById("eye2-display").style.display = "none";

    document.getElementById("face-display").style.display = "block";
    document.getElementById("eye1-display").style.display = "block";
    document.getElementById("mouth-display").style.display = "block";
};

// Mouth
document.getElementById("mouth-editor").onclick = () => {
    codeSelected = "mouth";
    document.getElementById("mouth-display").style.display = "none";

    document.getElementById("face-display").style.display = "block";
    document.getElementById("eye1-display").style.display = "block";
    document.getElementById("eye2-display").style.display = "block";
};

// Functions

function applyChanges() {
    faceEditor = document.getElementById("face-editor-textarea").value;
    eye1Editor = document.getElementById("eye1-editor-textarea").value;
    eye2Editor = document.getElementById("eye2-editor-textarea").value;
    mouthEditor = document.getElementById("mouth-editor-textarea").value;

    face.style.cssText = faceEditor;
    eye1.style.cssText = eye1Editor;
    eye2.style.cssText = eye2Editor;
    mouth.style.cssText = mouthEditor;
}

function resetChanges() {
    document.getElementById("face-editor-textarea").value = "";
    document.getElementById("eye1-editor-textarea").value = "";
    document.getElementById("eye2-editor-textarea").value = "";
    document.getElementById("mouth-editor-textarea").value = "";
    resetChangesBtn.value = "Resetear codigo";
    resetChangesBtn.style.border = "5px solid #000";
    resetChangesBtn.style.color = "#000";

    applyChangesBtn.value = "Aplicar cambios";
    applyChangesBtn.style.border = "5px solid #000";
    applyChangesBtn.style.color = "#000";

    reset = 0;
    applyChanges();
}