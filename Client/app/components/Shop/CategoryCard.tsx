'use client'
import React from 'react'
import '../../shop/shopStyling.css'
import CategoryCardIndividual from './CategoryCardIndividual'
import axios from 'axios'
import { useState } from 'react'

type Category = {
    id: number;
    name: string;
};

function CategoryCard() {
    
    const [categories, setCategoies] = useState<Category[]>([]);

    // fetch category info
    const fetchCategories = () => {
        try {
            const response = axios.get('')

            if (!response) {
                console.log('fetchCategories response is not good');
            }

            // setCategoies(response.name);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='cardContainer'>
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
            <CategoryCardIndividual />
        </div>
    )
}

export default CategoryCard