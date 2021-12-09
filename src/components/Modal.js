const Modal = ({open, closeModal, recipe}) => {
    if(!open) return null

    return (
        <div className='modal-bg' open={open}>
            <div className='modal-content p-3'>
                <div className='close-modal ml-auto'>
                    <h1 className='text-danger mr-2' onClick={ closeModal }>X</h1>
                </div>
                <h1 className='modal-title text-center mt-3 mb-3'>{ recipe.title }</h1>
                <h3 className='mt-4'>Health Score</h3>
                {
                    recipe.healthScore > 80 ?
                    <h1 className='mt-4' style={{color: 'green'}}>{ recipe.healthScore } / 100</h1>
                    :
                    <h1 className='mt-4' style={{color: 'orange'}}>{ recipe.healthScore } / 100</h1>
                }
                
                
                <a href={recipe.sourceUrl} target='_blank' className='site-link'>Visit Site</a>
            </div>
        </div>
    )
}

export default Modal
