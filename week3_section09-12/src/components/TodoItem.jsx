import { memo } from "react";
import "./TodoItem.css"

const TodoItem = ({ 
    id,
     isDone,
      content,
       date,
        onUpdate,
         onDelete
         }) => {
    const onChangeCheckbox = (e) => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (

        <div className="TodoItem">
            <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

export default memo(TodoItem, (prevProps, nextProps)=>{
    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isDone !== nextProps.isDone) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;
    return true;
});