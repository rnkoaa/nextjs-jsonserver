import path from 'path';
import { promises as fs } from 'fs';

import { User, Post, Album, Comment, Photo, Todo } from "../../types";

// load users from user db file 
export const loadUserData = async (context: string): Promise<Map<string, User | null>> => {
  const jsonData = await jsonFile(context)

  return new Map(
    jsonData.map((obj: User) => [`${obj.id}`, obj])
  );
};

// load Album from user db file 
export const loadComments = async (context: string): Promise<Map<string, Comment | null>> => {
  const jsonData = await jsonFile(context)

  return new Map(
    jsonData.map((obj: Comment) => [`${obj.id}`, obj])
  );
};


// load Album from user db file 
export const loadAlbums = async (context: string): Promise<Map<string, Album | null>> => {
  const jsonData = await jsonFile(context)

  return new Map(
    jsonData.map((obj: Album) => [`${obj.id}`, obj])
  );
};

// load users from user db file 
export const loadPostData = async (context: string): Promise<Map<string, Post | null>> => {
  const jsonData = await jsonFile(context)

  return new Map(
    jsonData.map((obj: Post) => [`${obj.id}`, obj])
  );
};

// load users from user db file 
export const loadTodos = async (context: string): Promise<Map<string, Todo | null>> => {
  const jsonData = await jsonFile(context)

  return new Map(
    jsonData.map((obj: Todo) => [`${obj.id}`, obj])
  );
};

// load users from user db file 
export const loadPhotos = async (context: string): Promise<Map<string, Photo | null>> => {
  const jsonData = await jsonFile(context)

  return new Map(
    jsonData.map((obj: Photo) => [`${obj.id}`, obj])
  );
};

export const jsonFile = async (context: string): Promise<any> => {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(jsonDirectory + `/${context}.json`, "utf8");
  return JSON.parse(fileContents);
}

