
/*-- Pop-Up Saída Página --*/
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    
    modal.addEventListener('click', (e) => {
        if (e.target.id == modalID || e.target.className == 'fechar') {
            modal.classList.remove('mostrar');
        }

    })
}
document.addEventListener('mouseleave', () => {
    iniciaModal('modal-promocao');
});



