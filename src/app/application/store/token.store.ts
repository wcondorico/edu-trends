import { inject, Injectable, signal } from '@angular/core';
import { TokenStorageService } from '../../infrastructure/services/token-storage.service';

@Injectable({ providedIn: 'root' })
export class TokenStore {
  private readonly storage = inject(TokenStorageService);

  private readonly _accessToken = signal<string | null>(
    this.storage.getAccessToken()
  );

  private readonly _refreshToken = signal<string | null>(
    this.storage.getRefreshToken()
  );

  readonly accessToken = this._accessToken.asReadonly();
  readonly refreshToken = this._refreshToken.asReadonly();

  setTokens(access: string, refresh: string): void {
    this._accessToken.set(access);
    this._refreshToken.set(refresh);
    this.storage.setTokens(access, refresh);
  }

  getTokens(): { access: string | null; refresh: string | null } {
    return {
      access: this._accessToken(),
      refresh: this._refreshToken(),
    };
  }

  hasTokens(): boolean {
    return this.storage.hasTokens();
  }

  clear(): void {
    this._accessToken.set(null);
    this._refreshToken.set(null);
    this.storage.removeTokens();
  }
}
