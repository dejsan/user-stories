import React from 'react'

class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const { resetAddFormState } = this.props
        resetAddFormState()
    }

    handleSubmit(event) {
        const { requestAddPost } = this.props

        event.preventDefault();

        const formData = new FormData(event.target);
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        var postData = JSON.stringify(object);

        requestAddPost(postData)
    }

    render(){
        const { goToBlog, isRequestingAddPost, isAddPostSuccessful } = this.props

        return (
            <form id='addForm' className='container' onSubmit={this.handleSubmit}>
                { isAddPostSuccessful &&
                    <div className='row justify-content-md-center'>
                        <div className='alert alert-success col-lg-6'>
                            <strong>Success!</strong>
                        </div>
                    </div>
                }
                <div className='row justify-content-md-center'>
                    <div className='form-group col-lg-6'>
                        <label htmlFor='InputTitle'>Title</label>
                        <input
                            name='title'
                            type='text'
                            className='form-control'
                            id='InputTitle'
                            placeholder='Enter title'
                            required
                        />
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <div className='form-group col-lg-6'>
                    <label htmlFor='InputTitle'>Categories</label>
                        <input
                            name='categories'
                            type='text'
                            className='form-control'
                            id='InputTitle'
                            placeholder='Enter categories'
                            required
                        />
                    </div>
                </div>
                <div className='row justify-content-md-center'>

                    <div className='form-group col-lg-6'>
                        <label htmlFor='InputContent'>Content</label>
                        <textarea name='content' className='form-control' id='InputContent' rows='8' placeholder='Enter content' required ></textarea>
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <div className='form-group col-lg-6' id='actionButtons'>
                        <button
                            type='button'
                            className='btn btn-lg btn-danger'
                            onClick={() => goToBlog()}
                        >
                            Cencel
                        </button>
                        <button
                            type='submit'
                            className='btn btn-lg btn-success'
                            disabled={isRequestingAddPost}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
  
export default AddForm