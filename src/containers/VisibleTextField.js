import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TextField from '../components/TextField'

const getVisibleTexts = (TextField, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return TextField
    case 'SHOW_COMPLETED':
      return TextField.filter(t => t.read)
    case 'SHOW_ACTIVE':
      return TextField.filter(t => !t.read)
  }
}

const mapStateToProps = (state) => {
  return {
    todosSt: getVisibleTexts(state.messages, state.visibilityFilter)

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTextField = connect(  mapStateToProps,  mapDispatchToProps)(TextField)

export default VisibleTextField