import { PhotoService } from "./photo.service";
import { Album } from "./shared/album.model";
import { Photo } from "./shared/photo.model";

export class AlbumService {
  private readonly albumData: Album[];
  private readonly photoService: PhotoService;
  private readonly albumDataMap: Map<number, Album | null>;

  constructor(_albumData: Album[], _photoService: PhotoService) {
    this.albumData = _albumData;
    this.photoService = _photoService;
    this.albumDataMap = new Map(
      _albumData.map((obj) => {
        return [obj.id, obj];
      })
    );
  }

  findAll(): Album[] {
    return this.albumData;
  }

  findById(id: number): Album | null {
    const found = this.albumDataMap.get(id);
    if (!found) {
      // cuz it could be undefined
      return null;
    }
    return found;
  }

  findByUser(userId: number): Album[] {
    return this.albumData.filter((album) => album.userId === userId);
  }

  findAlbumPhotos(albumId: number): Photo[] {
    return this.photoService.findForAlbum(albumId);
  }
}
