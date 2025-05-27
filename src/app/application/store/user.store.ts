import { Injectable, signal } from '@angular/core';
import { User } from '../../domain/interfaces/user-type.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStore {
  private readonly _user = signal<User | null>(null);

  readonly user = this._user.asReadonly();

  setUser(user: User): void {
    this._user.set(user);
  }

  setUserFullName(fullName: string): void {
    const currentUser = this._user();
    if (currentUser) {
      this._user.set({ ...currentUser, fullName });
    }
  }

  clear(): void {
    this._user.set(null);
  }

  isAuthenticated(): boolean {
    return !!this._user();
  }

  getUser(): User | null {
    return this._user();
  }
}
