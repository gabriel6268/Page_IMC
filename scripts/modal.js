
/*creating object modal*/
export const Modal = {
    modalMessage: document.querySelector(".modal .title span"),
    modalClose: document.querySelector(".modal button.close"),
    modalWrapper: document.querySelector(".modalWrapper"),
    open() {
        Modal.modalWrapper.classList.toggle("open");
    },

    close() {
        Modal.modalWrapper.classList.toggle("open");
    },
};

/*creating function button close*/
Modal.modalClose.onclick = () => {
    Modal.close();
};

window.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        Modal.close();
    }
});
