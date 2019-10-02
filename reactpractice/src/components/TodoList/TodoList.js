import React from "react";
import TodoItem from "../TodoItem/todoItem";
// import "./style.css";

class TodoList extends React.Component{


render(){
  const { todo } = this.props
 return(
   <div>
     <h1> 12+ Month</h1>
      <h3 onClick={this.lineM}>No worries, you got this!</h3>
      <ul>
        <li>
        Talk budget and decide who is contributing what
        </li>
        <li>
        Discover your wedding style
        </li>
        <li>
        create a wedding website
          </li>
          <li>
          Begin compiling a guest list
          </li>
          <li>
          Browse wedding dress and veil styles
          </li>
      </ul>
   </div>
 )
}

}
export default TodoList;