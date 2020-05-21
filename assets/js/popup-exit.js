
/*-- Pop-Up Saída Página --*/
function iniciaModal(modalID) {
    
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    
    modal.addEventListener('click', (e) => {

        const targetId = e.target.id

        if (targetId == modalID || targetId == 'button-close-modal' || targetId == 'button-answer') {
            modal.classList.remove('mostrar');
        }

        if (targetId == 'button-answer') {
            window.scrollTo(0, 0)
        }

    })
}

function showModal() {

        // Remove this event listener
        document.removeEventListener("mouseleave", showModal);

        // Show the popup
        iniciaModal('modal-promocao');

}
  
document.addEventListener("mouseleave", showModal);





