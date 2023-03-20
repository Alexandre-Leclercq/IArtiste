import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneratedImage } from '../interface/generatedImage';
import { HttpHeaders } from '@angular/common/http';
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

    generateImage(text: string): Observable<GeneratedImage>{
      const body = {
        "prompt": text,
        "n": 1,
        "size": "512x512",
        "response_format": "b64_json"
      };
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Bearer'+this.apiKey
        })
      };

      return this.http.post<GeneratedImage>(this.baseUrl+ 'generations', JSON.stringify(body), httpOptions);
    }
}
