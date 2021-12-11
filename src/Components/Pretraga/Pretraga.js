
const Pretraga = ({setSearchString}) => {


    const formSubmit = (event) => {
        event.preventDefault();
        setSearchString(event.target.searchString.value);
        // console.log(event.target.searchString.value);
    }


    return (
        <>
            <div className="container">
                <form onSubmit={(event) => formSubmit(event)}>
                    <div className="input-group mt-3 mb-3">
                        <input type="text" className="form-control" name="searchString" placeholder="Search"
                            aria-label="Search" />
                        <button className="btn btn-primary dgmPretraga" type="submit" id="button-addon2">Go!</button>
                    </div>
                </form>
            </div>

        </>
    )

}

export default Pretraga;