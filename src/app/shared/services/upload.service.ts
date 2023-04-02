import { Injectable, inject } from '@angular/core';
import { Storage, ref, uploadString, getDownloadURL, UploadResult } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private readonly storage: Storage = inject(Storage);

  constructor() { }

  uploadFile(img_b64: string): Promise<UploadResult> {
    const filename = img_b64.substr(1, 10)+Date.now()+'.png'
    const storageRef = ref(this.storage, filename);
    return uploadString(storageRef, img_b64, 'base64', {
      contentType: 'image/png',
    });
}

  downloadFile(filename: string): Promise<string> {
    return getDownloadURL(ref(this.storage, filename))
  }
}
