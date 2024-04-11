import {useState, useEffect} from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CardsList from "./components/CardsList.jsx";
import Error from "./components/Error.jsx";
import Pagination from "./components/Pagination.jsx";
import Search from "./components/Search.jsx";
import {API_URL} from "./constants.js";

const Home = () => {
    const [initData, setInitData] = useState();
    const [characters, setCharacters] = useState();
    const [searchTermCharacters, setSearchTermCharacters] = useState();
    const [noResults, setNoResults] = useState(false);
    const [totalResults, setTotalResults] = useState();
    const [totalPages, setTotalPages] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const searchCharacters = () => {
        if (searchTermCharacters) {
            const searchResults = initData.filter(character => character.name.toLowerCase().includes(searchTermCharacters.toLowerCase()))
            setCharacters(searchResults);
            setNoResults(searchResults.length === 0);
        } else {
            setCharacters(initData);
        }
    }

    const getCharacters = async (page = 1) => {
        try {
            const data = await fetch(`${API_URL}?page=${page}`);
            const response = await data.json();
            setCharacters(response.results);
            setInitData(response.results);
            setTotalResults(response.info.count);
            setTotalPages(response.info.pages);
        } catch (err) {
            console.error(err);
        }
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        getCharacters(newPage);
    }

    useEffect(() => {
        searchCharacters()
    }, [searchTermCharacters])

    useEffect(() => {
        getCharacters();
    }, []);

    return <div className="container mx-auto">
        <Header/>
        <Search setSearchTermCharacters={setSearchTermCharacters}/>
        {totalResults &&  <p className="mt-4">Total characters are: <span className="font-bold">{totalResults}</span></p> }
        {noResults ? <Error searchTermCharacters={searchTermCharacters}/> : <CardsList characters={characters}/>}
        {totalPages && <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>}
        <Footer/>
    </div>
}

export default Home;