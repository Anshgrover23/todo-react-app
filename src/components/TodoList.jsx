import { TodoCard } from './TodoCard'

export function TodoList(props) {
  const { todos, selectedTab, todoIndex } = props
  // const tab = 'Open'
  const filteredTodoList = selectedTab === 'All' ?
    todos :
    selectedTab === 'Completed' ?
      todos.filter(val => val.complete) :
      todos.filter(val => !val.complete)
  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todo={todo} {...props} todoIndex={todoIndex} />
        )
      })}
    </>
  )
}