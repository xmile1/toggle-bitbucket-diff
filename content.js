const observer = new MutationObserver(function (mutations) {
    const changedFileHeaders = document.querySelectorAll('.diff-container > .heading');
    if (changedFileHeaders.length) {
        AddToggleToDiffFiles(changedFileHeaders)
    }
})

const startObserver = () => {
    observer.observe(document.body, {
        childList: true
        , subtree: true
    })
}

startObserver()

const AddToggleToDiffFiles = (changedFileHeaders) => {
    changedFileHeaders.forEach((changedFileHeader) => {
        if (changedFileHeader.style.cursor !== 'pointer') {
            changedFileHeader.style.cursor = 'pointer'
            const changedFileHeaderLeft = changedFileHeader.firstElementChild
            changedFileHeaderLeft.addEventListener('click', () => {
                const isContentHidden = changedFileHeader.nextElementSibling.style.display === 'none'
                const changedFileSection = changedFileHeader.parentElement.parentElement
                const changedFileContent = changedFileHeader.nextElementSibling

                changedFileSection.style.minHeight = isContentHidden ? '82px' : 'unset'
                changedFileHeader.style.borderBottom = isContentHidden ? 'initial' : '1px solid #DFE1E6'
                changedFileContent.style.display = isContentHidden ? 'block' : 'none'
            })
        }
    })
}