const openModal = (modalId) => {
    modal = document.querySelector(`#${modalId}`)
    modal.showModal()
}

const closeModal = (modalId) => {
    modal = document.querySelector(`#${modalId}`)
    modal.close()
}