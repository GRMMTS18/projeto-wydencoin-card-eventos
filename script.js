document.addEventListener('DOMContentLoaded', () => {
    // === LÓGICA DE INSCRIÇÃO (Usuário) ===
    const subscribeButtons = document.querySelectorAll('.botao-evento');
    const inscricaoModal = document.getElementById('inscricaoModal');
    const fecharModalBtn = inscricaoModal ? inscricaoModal.querySelector('.fechar-modal-usuario') : null;

    if (subscribeButtons.length > 0 && inscricaoModal) {
        subscribeButtons.forEach(button => {
            button.addEventListener('click', () => {
                inscricaoModal.style.display = 'flex';
            });
        });
    }

    if (fecharModalBtn) {
        fecharModalBtn.addEventListener('click', () => {
            inscricaoModal.style.display = 'none';
        });
    }

    if (inscricaoModal) {
        inscricaoModal.addEventListener('click', (event) => {
            if (event.target === inscricaoModal) {
                inscricaoModal.style.display = 'none';
            }
        });
    }
    
    // A lógica do menu hambúrguer foi removida.
});