import React, { useState } from "react";
import styled from 'styled-components'
import initialData from './data'
import { DragDropContext, DropResult, Draggable, Droppable } from 'react-beautiful-dnd'

// const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
//   obj[key];

type Props = {}

type StateType = {
  tasks: {
    [key: string]: {
      id: string,
      content: string
    }
  },
  columns: {
    [key: string]: {
      id: string,
      title: string,
      taskIds: string[]
    }
  },
  columnOrder: string[]
}

type ColumnProps = {
  column: {
    id: string,
    title: string,
    taskIds: string[]
  },
  tasks: {
    id: string,
    content: string
  }[]
}

type TaskProps = {
  task: {
    id: string,
    content: string
  },
  index: number
}

// Column component
const ColumnContainer = styled.div`
  padding:8px;
  border: 1px solid lightgrey;
  border-radius:2px;
  max-width:300px;
`
const ColumnTitle = styled.h3`
  padding: 8px;
`
const TaskList = styled.div<{isDraggingOver: boolean}>`
  padding: 8px;
  background-color: ${p => p.isDraggingOver ? 'skyblue' : 'transparent'};s
`

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{column.title}</ColumnTitle>
      <Droppable droppableId={column.id}>
        {(provider, snapshot) => 
          <TaskList
            ref={provider.innerRef}
            {...provider.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
            {provider.placeholder}
          </TaskList>
        }
      </Droppable>
    </ColumnContainer>
  )
}

// Task component
const TaskContainer = styled.div<{isDragging: boolean}>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background: ${props => props.isDragging ? 'lightgrey' : 'transparent'};
`

const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => 
        <TaskContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </TaskContainer>
      }
    </Draggable>
  )
}

// Layout component
const DropAndDrag: React.FC<Props> = () => {
  const [state, setState] = useState<StateType>(initialData)
  const onDragEndHandler = (result: DropResult) => {
    const { destination, source, draggableId } = result

    if(!destination) return;
    if( 
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    const column = state.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    }

    setState(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      {state.columnOrder.map(columnId => {
        const column = state.columns[columnId]
        const tasks = column.taskIds.map(taskId => state.tasks[taskId])

        return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )
}

export default DropAndDrag


