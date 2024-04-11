import Card from './Card.jsx';
const CardsList = ({characters}) => {

    const createCards = () => {
        return characters.map((character, index) => {
            return <Card key={index} character={character}/>
        })
    }

    return <ul className="flex flex-wrap gap-4 justify-center my-4">{ characters && createCards() }</ul>
}

export default CardsList;