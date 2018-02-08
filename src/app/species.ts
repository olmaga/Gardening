import {Todo} from './todo';

export interface Species {
  id: string;
  width: number;
  distance: number;
  name: string;
  todos?: Todo[];
  assignee?: string;
}
