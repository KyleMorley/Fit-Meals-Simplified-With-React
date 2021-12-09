import { useState } from 'react';

const SearchRecipes = ({ searchRecipes }) => {
    const [search, setSearch] = useState('');

    const submit = (e) => {
        e.preventDefault();

        searchRecipes(search);
    }

    return (
        <form className='search-bar' onSubmit={ submit }>
            <input className='p-2 rounded' type='text' placeholder='Search...' onChange={ (e) => setSearch(e.target.value) } />
        </form>
    )
}

export default SearchRecipes;
