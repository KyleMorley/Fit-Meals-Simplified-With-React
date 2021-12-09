import Modal from './Modal'
import Button from './Button'
import { useState } from 'react'

const RecipeCard = ({ recipe }) => {
    const [openModal, setOpen] = useState(false);
    
    const closeModal = () => setOpen(false)

    return (
        <div className='container recipe-card mt-4'>
            <img className='w-100 mt-3' src={recipe.image} alt='Recipe'></img>
            <h3 className='text-center mt-3'>{recipe.title}</h3>
            <Button text={'See More'} onClick={() => setOpen(true)}></Button>
            <Modal open={ openModal } closeModal={ closeModal } recipe={ recipe }/>
        </div>
    )
}

export default RecipeCard
