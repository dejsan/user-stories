import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reducers/home'

const Home = props => (
  <div>
    <h1>User Stories</h1>
    <p> Here we'll going to have a list of posts and detailed view of post</p>
    <div class="testArea">
      <h2>For test purpose:</h2>
      <p>Test Count: {props.count}</p>
      <p>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
          Increment Async
        </button>
      </p>
      <p>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
          Decrement Async
        </button>
      </p>
      <p>
        <button onClick={() => props.changePage()}>
          Go to addNewPost page via redux
        </button>
      </p>
    </div>
  </div>
)

const mapStateToProps = ({ home }) => ({
  count: home.count,
  isIncrementing: home.isIncrementing,
  isDecrementing: home.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/add-post')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
