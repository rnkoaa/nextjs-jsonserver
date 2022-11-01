// /users/{userId}/albums
// /albums
// /users/{userId}/albums/{id}
// /albums/{id}
export interface Album {
  userId: number;
  id: number;
  title: string;
}

// /users/{userId}/posts/{postId}/comments
// /posts/{postId}/comments
// /users/{userId}/posts/{postId}/comments/{id}
// /posts/{postId}/comments/{id}
export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

// /users/{userId}/albums/{albumId}/photos
// /albums/{albumId}/photos
// /users/{userId}/albums/{albumId}/photos/{id}
// /albums/{albumId}/photos/{id}
export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// /users/{userId}/posts
// /posts
// /users/{userId}/posts/{id}
// /posts/{id}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// /users/{userId}/todos/
// /todos
// /users/{userId}/todos/{id}
// /todos/{id}
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// /users ✅
// /users/{id} ✅
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone?: string;
  company?: Company;
}

export interface Address {
  string: string;
  suite?: string;
  city: string;
  zipcode: string;
  geo: Map<string, string>;
}

export interface Company {
  name: string;
  catchPhrase?: string;
  bs?: string;
}
