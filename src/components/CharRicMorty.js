import './CharRicMorty.modules.css'
const CharRicMorty = ({item}) => {

    return (
        <div >

            <h1>{item.id}{item.name}</h1>
            <h2>{item.status}{item.species}</h2>
            <h3>{item.gender}</h3>
            <img src={item.image} alt={item.name}/>
        </div>
    );
};

export {CharRicMorty};