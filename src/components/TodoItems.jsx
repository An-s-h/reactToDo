import Todoitem from "./Todoitem";
import css from "./TodoItems.module.css";
const todoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={css.itemsContainer}>
      {todoItems.map((Item) => (
        <Todoitem
          key={Item.name}
          todoDate={Item.dueDate}
          todoName={Item.name}
          onDeleteClick={onDeleteClick}
        ></Todoitem>
      ))}
    </div>
  );
};
export default todoItems;
