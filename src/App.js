import React from 'react';
// import './CharRicMorty.modules.css';
import { CharRicMorty } from "./components/CharRicMorty";
import { rickAndmorys } from "./data/data";

const App = () => {

    return  (
        <div>
            {
                rickAndmorys.map((rickAndmory,id)=>(
                    <CharRicMorty item={rickAndmory} key={id}/>

                ))
            }
        </div>
    );
};

export {App};