export type Task = {
  title: string;
  isCompleted: boolean;
  subTasks: Array<Task>;
}
