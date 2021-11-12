import React, { useState } from 'react'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GigExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto']);
    return (
        <>
            <h2>Gif Expert App</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category, i) => (
                        // return <li key={`${category}-${i+1}`}>{category}</li>
                        <GifGrid 
                            key={`${category}-${i+1}`}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GigExpertApp
