import { EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { UserFacade } from '../application/facade/user.facade';
import { UserRepository } from '../domain/repository/user.repository';
import { UserHttp } from '../infrastructure/http/user.http';

export function provideAuthentication(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAppInitializer(() => {
      inject(UserFacade).init();
    }),
    {
      provide: UserRepository,
      useClass: UserHttp
    }
  ]);
}
