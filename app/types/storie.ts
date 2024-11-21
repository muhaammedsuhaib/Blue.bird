export interface Story {
  content: string;
  author: string;
  isArchived: boolean;
  _id: string;
  postedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface CreateStorieResponse {
  message: string;
  data: Story;
}

export interface StoryItem {
  content: string;
  postedAt: string;
  _id: string;
}

export interface Author {
  _id: string;
  username: string;
  profilePicture: string;
}

export interface StoryData {
  stories: StoryItem[];
  author: Author;
}

export interface FetchStoriesResponse {
  message: string;
  data: StoryData[];
}
