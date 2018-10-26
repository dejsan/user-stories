import React from 'react'

const AddForm = props => {

    const { cancel } = props

    return (
        <form id="addForm">
            <div className="form-group col-lg-6 centered">
                <label htmlFor="InputTitle">Title</label>
                <input type="text" className="form-control" id="InputTitle" placeholder="Enter title"/>
            </div>
            <div className="form-group col-lg-6 centered">
                <label htmlFor="InputCategorie">Categorie</label>
                <select className="form-control" id="InputCategorie">
                    <option>Games</option>
                    <option>BoardGames</option>
                    <option>Science</option>
                    <option>Movies</option>
                    <option>Music</option>
                </select>
            </div>
            <div className="form-group col-lg-6 centered">
                <label htmlFor="InputContent">Content</label>
                <textarea className="form-control" id="InputContent" rows="8"></textarea>
            </div>
            <div className="form-group col-lg-6 centered" id="actionButtons">
                <button type="button" className="btn btn-lg btn-danger" onClick={() => cancel()}>Cencel</button>
                <button type="submit" className="btn btn-lg btn-success" onClick={() => cancel()}>Submit</button>
            </div>
        </form>
    )
}
  
export default AddForm