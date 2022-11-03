import { Photo } from "./shared/photo.model";

export class PhotoService {
    private readonly photoData: Photo[];
    private readonly photoDataMap: Map<number, Photo | null>;

    constructor(_photoData: Photo[]) {
        this.photoData = _photoData;
        this.photoDataMap = new Map(
            _photoData.map((obj) => {
                return [obj.id, obj];
            })
        );
    }

    findAll(): Photo[] {
        return this.photoData;
    }

    findById(id: number): Photo | null {
        const found = this.photoDataMap.get(id);
        if (!found) {
            // cuz it could be undefined
            return null;
        }
        return found;
    }

    findForAlbum(albumId: number): Photo[] {
        return this.photoData.filter((p) => p.albumId === albumId);
    }
}
