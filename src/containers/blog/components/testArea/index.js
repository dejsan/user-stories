import React from 'react'

const TestArea = props => {

    const { count, increment, incrementAsync, isIncrementing, decrement, decrementAsync, isDecrementing, addPost } = props
  
    return (
        <div className="justify-content-center" id="testArea">
            <h2>For test purpose:</h2>
            <p>Test Count: {count}</p>
            <p>
                <button onClick={increment}>Increment</button>
                <button onClick={incrementAsync} disabled={isIncrementing}>
                    Increment Async
                </button>
            </p>
            <p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={decrementAsync} disabled={isDecrementing}>
                    Decrement Async
                </button>
            </p>
            <p>
                <button onClick={() => addPost()}>
                    Go to addNewPost page via redux
                </button>
            </p>
        </div>
    )
}
  
export default TestArea