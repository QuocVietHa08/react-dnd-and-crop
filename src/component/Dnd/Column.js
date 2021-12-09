import React from 'react'
import {  Draggable } from 'react-beautiful-dnd'
import styles from './Dnd.module.scss'
// import initialData from './initialData'
function Column(props) {
  const {state, setState, column, index} = props;
  const deleteColumn = () => {
    Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

    let stateClone = {...state};
    stateClone = {...stateClone,"columns":Object.filter(stateClone.columns, col => col.id !== column.id) ,"columnOrder": stateClone.columnOrder.filter(col => col !== column.id)}

    setState(stateClone);

  }

  return (
      <Draggable draggableId={props.column.id} index={props.index}>
        {(provided) => (
          <div>
            <div {...provided.draggableProps}  {...provided.dragHandleProps} ref={provided.innerRef} >
              <div className={styles.column}>
                <div>{props.column.id}</div>
                <div onClick={deleteColumn}>delete</div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
     
  )
}

export default Column
