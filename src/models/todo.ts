export interface ITodo {
  id: number;
  title: string;
  description: string;
  createdDate: string;
  modifiedDate?: string;
}

export interface ITodoCollection {
  items: Array<ITodo>;
}

