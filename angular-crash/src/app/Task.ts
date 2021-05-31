//allows task interface to be used by other classes
export interface Task {
  id?: number; //? means property is optional
  text: string;
  day: string;
  reminder: boolean;
}