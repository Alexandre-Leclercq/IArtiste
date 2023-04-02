import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneratedImage, ResponseGeneratedImage } from '../interface/generatedImage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl = "https://api.openai.com/v1/images/";
  public apiKey = "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";

  constructor(
    private http: HttpClient
  ) { }

  generateImage(text: string): Observable<ResponseGeneratedImage>{
    const body = {
      "prompt": text,
      "response_format": "b64_json",
      "size": "512x512"
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+this.apiKey
      })
    };

    return this.http.post<ResponseGeneratedImage>(this.baseUrl+ 'generations', JSON.stringify(body), httpOptions);
  }
}
