interface BaseTask {
  title: string;
  description: string;
}

export interface NewTaskEntry extends BaseTask {
  userid: number;
}

export interface Task extends NewTaskEntry {
  id: number;
  completed: boolean;
  timestamp: string;
}