import Button from "./Button.jsx";

const Pagination = ({currentPage, totalPages, handlePageChange}) => {
    return <div className="flex gap-2 my-4 justify-center items-center">
        <Button
            label="Prev"
            clickHandler={() => handlePageChange(currentPage - 1)}
            classes={`${currentPage === 1 ? "opacity-20" : "opacity-100"} bg-black text-white p-2 rounded-md`}
            disabled={currentPage === 1}/>
        <p>Page {currentPage} of {totalPages}</p>
        <Button
            label="Next"
            clickHandler={() => handlePageChange(currentPage + 1)}
            classes={`${currentPage === totalPages ? "opacity-20" : "opacity-100"} bg-black text-white p-2 rounded-md`}
            disabled={currentPage === totalPages}
        />
    </div>
}

export default Pagination;