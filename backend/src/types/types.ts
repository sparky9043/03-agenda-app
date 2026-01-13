interface BaseTask {
  title: string;
  description: string;
}

interface NewTaskEntry extends BaseTask {
  userid: number;
}

interface Task extends NewTaskEntry {
  id: number;
  completed: boolean;
  timestamp: string;
}