import React, { useState } from 'react'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GigExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto']);
    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GigExpertApp
