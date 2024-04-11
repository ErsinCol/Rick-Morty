import Input from "./Input.jsx";

const Search = ({setSearchTermCharacters}) => {
    return <div>
        <Input
            type="search"
            placeholder="Type your character..."
            changeHandler={(e) => setSearchTermCharacters(e.target.value)}
        />
    </div>
}

export default Search;