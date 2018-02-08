import {Todo} from './todo';

export interface Specie {
  id: string;
  width: number;
  distance: number;
  name: string;
  todos?: Todo[];
  assignee?: string;
}
