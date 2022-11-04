import { Db } from "../db";
import { describe, expect, test } from "@jest/globals";
import { Photo } from "../users";

describe("PhotoService - ", () => {
  test("load all photos from database", async () => {
    const db = new Db();
    await db.onLoad();
    expect(db.photos!.findAll().length).toEqual(5000);
  });

  test("non existent photo will return null", async () => {
    const db = new Db();
    await db.onLoad();

    const photo = db.photos!.findById(1000000);
    expect(photo).toBeNull();
  });

  test("load an photo from database given its id", async () => {
    const db = new Db();
    await db.onLoad();

    const expectedPhoto: Photo = {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    };

    const photo = db.photos!.findById(1);
    expect(photo).not.toBeNull();
    expect(photo).toEqual(expectedPhoto);
  });

  test("load photos for an photo from database given its id", async () => {
    const db = new Db();
    await db.onLoad();

    const photos = db.photos!.findForAlbum(1);
    expect(photos).not.toBeNull();
    expect(photos.length).toEqual(50);
  });
});
