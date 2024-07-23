import { DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';

const green = '#02d18c';
const pink = '#f3b4c4';


export const getItemStyle = (
  isDragging: boolean,
  DraggableStyle: DraggingStyle | NotDraggingStyle | undefined) => ({
  ...DraggableStyle,
  background: isDragging ? green : pink
});
