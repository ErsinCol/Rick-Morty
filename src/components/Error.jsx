const Error = ({searchTermCharacters}) => {
    return <p className="text-xl text-black font-bold bg-red-300 rounded-md p-4 mx-auto text-center w-max">Oops! No result found for <span className="italic">{searchTermCharacters}</span></p>
}

export default Error;