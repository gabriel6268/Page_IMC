/*declaring imports*/
import { Modal } from "./modal.js";
import { alertError } from "./alertError.js";
import { calculateIMC, notNumber } from "./utils.js";

/*declaring variables*/
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

/*creating functions*/
form.onsubmit = (e) => {
    e.preventDefault();

    const height = inputHeight.value;
    const weight = inputWeight.value;

    const wightOrHeightIsNotAMumber = notNumber(weight) || notNumber(weight) || notNumber(height) || notNumber(height)

    if (wightOrHeightIsNotAMumber) {
        alertError.open();
        return;
    }

    alertError.close();

    const result = calculateIMC(weight, height);
    displayResultMessage(result);
};

function displayResultMessage(result) {
    Modal.modalMessage.innerText = `Seu IMC é de ${result}.`;
    Modal.open();
}

inputHeight.oninput = () => alertError.close();
inputWeight.oninput = () => alertError.close();

