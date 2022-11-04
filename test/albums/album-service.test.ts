import { Db } from "../db";
import { describe, expect, test } from "@jest/globals";
import { Album } from "../users";

describe("AlbumService - ", () => {
  test("load all albums from database", async () => {
    const db = new Db();
    await db.onLoad();
    expect(db.albums!.findAll().length).toEqual(100);
  });

  test("non existent album will return null", async () => {
    const db = new Db();
    await db.onLoad();


    const album = db.albums!.findById(1000000);
    expect(album).toBeNull();
  });

  test("load an album from database given its id", async () => {
    const db = new Db();
    await db.onLoad();

    const expectedAlbum: Album = {
      id: 1,
      userId: 1,
      title: "quidem molestiae enim",
    };

    const album = db.albums!.findById(1);
    expect(album).not.toBeNull();
    expect(album).toEqual(expectedAlbum);
  });

  test("load photos for an album from database given its id", async () => {
    const db = new Db();
    await db.onLoad();

    const photos = db.albums!.findAlbumPhotos(1);
    expect(photos).not.toBeNull();
    expect(photos.length).toEqual(50);
  });
});
