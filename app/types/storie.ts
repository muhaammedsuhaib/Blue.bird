export interface Story {
    content: string;
    author: string;
    isArchived: boolean;
    _id: string;
    description:string;
    postedAt: string; 
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  export interface CreateStorieResponse {
    message: string;
    data: Story;
  }
  