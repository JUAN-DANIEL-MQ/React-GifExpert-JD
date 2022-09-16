import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ballz']);
    // console.log(categories);
 
    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        // categories.push('Valoran');

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
        <>
            <h1> GifExpertApp </h1>
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ value => onAddCategory(value) }
            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            { 
                categories.map( category => (
                        <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    )
                )  
            }

        </>
    )
}