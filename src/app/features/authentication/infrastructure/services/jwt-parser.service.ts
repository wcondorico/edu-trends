import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtParserService {
  parsePayload(token: string): any | null {
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      console.error('Invalid JWT', e);
      return null;
    }
  }
}
