import React from "react";
import TodoItem from "../TodoItem/todoItem";
import "./style.css";

class WeddingTodoList extends React.Component{
render(){
  const { todos } = this.props;
  return(
  <div className='WeddingTodoListContiner'> 
  {
    todos.map((_todo, _index) => {
      return(
        <TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todo}></TodoItem>
      )
    })
  }
  </div>
  
);
}

updateTodo = (todo) => {
  this.props.updateTodoFn(todo);
}

}



// function WeddingPlanner(props) {
//   return (
//     <div className="card">
//         <h1> 12+ Month</h1>
//         <h3>No worries, you got this!</h3>
//         { checked: true, text:'a date (or up to 3 so you can be flexible). '} <button id="done">Done</button><button id="delete">X</button> </li>
//         <p>Discover your wedding style.</p>
//         <p>Choose wedding party: Maid of Honor and Bridesmaids, Best Man and Groomsmen, Flower Girl and Ring Bearer.</p>
//         <p>Create a wedding website.</p>
//         <p>Get engagement ring insured and consider purchasing wedding insurance.</p>
//       <span onClick={() => props.removeList(props.id)} className="remove">
//         𝘅
//       </span>
//       <span onClick={() => props.checkList(props.id)} className="check">Done</span>
//     </div>
//   );
// }

export default WeddingTodoList;
