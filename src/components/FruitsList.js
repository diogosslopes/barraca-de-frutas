
import React, { useEffect, useState } from "react";


function FruitsList(props) {
    const [fruitsList, setFruitsList] = useState([
        {name:'Abacaxi'}, {name:'Acerola'}, {name:'Ameixa'}, {name:'Amora'},{name: 'Banana'}, {name:'Caju'}, {name:'Cereja'}, {name:'Coco'}, 
        {name:'Kiwi'}, {name:'Lichia'}, {name:'Maçã'}, {name:'Mamão'}, {name:'Manga'}, {name:'Melancia'}, {name:'Melão'}, {name:'Pera'}, {name:'Pêssego'}
    ]);
    const [fruits, setFruits] = useState([]);
    
    useEffect(() => {
        setFruits(fruitsList);
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelected") {
            let tempFruit = fruits.map((f) => {
                return { ...f, isChecked: checked };
            });
            setFruits(tempFruit);
            fruits.forEach((f)=>{
                props.fruits(f.name)

            })
        } else {
            let tempFruit = fruits.map((f) =>
                f.name === name ? { ...f, isChecked: checked } : f
            );
            setFruits(tempFruit);
            props.fruits(e.target.name)

        }
    };

    return (
        <div className="fruits-list-container" >
            <form className="fruits-list-check">
                <h3>Selecionar Frutas</h3>
                <div className="fruits-check allFruits">
                    <input id="todos" type="checkbox" className="fruits-input" name="allSelected" checked={!fruits.some((f) => f?.isChecked !== true)} onChange={handleChange} />
                    <label for="todos" className="form-check-label ms-2">Todos</label>
                </div>
                {fruits.map((f, index) => (
                    <div className="fruits-check" key={index}>
                        <input id={f.name} type="checkbox" className="form-check-input" name={f.name} checked={f?.isChecked || false} onChange={handleChange} /> 
                        <label for={f.name} className="form-check-label ms-2">{f.name}</label>
                    </div>
                ))}
            </form>
        </div>
    );
}

export default FruitsList;
