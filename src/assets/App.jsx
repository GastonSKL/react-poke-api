import React from 'react';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Button } from './Components/Button';
import { Card } from './Components/Card';
import './App.css'



export const App = () => {
    
    const [pokemonNumber, setpokemonNumber] = useState(1);
    const [pokemonEvo, setpokemonEvo] = useState([])
    

    let add = () =>{
        setpokemonNumber(pokemonNumber + 1);
    }

    let sustract = () =>{
        setpokemonNumber(pokemonNumber - 1);
    }

    let evolutions = async(id) =>{
        let res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
        let data = await res.json();

        let pokemonEvolutions = [];

        let evo1Name = data.chain.species.name;
        let evo1Img = await imgs(evo1Name);
        
        pokemonEvolutions.push([evo1Name, evo1Img]);
        
        if(data.chain.evolves_to.length !== 0){
            let evo2Name = data.chain.evolves_to[0].species.name;
            let evo2Img = await imgs(evo2Name);
            
            pokemonEvolutions.push([evo2Name, evo2Img]);
            
            if(data.chain.evolves_to[0].evolves_to.length !== 0){
                let evo3Name = data.chain.evolves_to[0].evolves_to[0].species.name;
                let evo3Img = await imgs(evo3Name);
            
                pokemonEvolutions.push([evo3Name, evo3Img]);
                setpokemonEvo(pokemonEvolutions); 
                console.log(pokemonEvo);
            }
    }
}
    

    let imgs = async(name) =>{
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        let data = await res.json();
        return data.sprites.other.dream_world.front_default;
        
    }

    useEffect(() => {
        evolutions(pokemonNumber)
    },[pokemonNumber]);
    

    return (
        <div className='poke-container'>
            <div className=''>
            <div className='Card__container'>
                {pokemonEvo.map(pokemon => <Card key={pokemon[0]} name={pokemon[0]} img={pokemon[1]}/>)}    
            </div>
            <div className='button-container'>
                <Button clickHandler={pokemonNumber > 0 ? sustract : null} icon={<FaArrowLeft/>} />
                <div></div>
                <Button clickHandler={add} icon={<FaArrowRight/>} />
            </div>
            </div>
        </div>
    
  )

}