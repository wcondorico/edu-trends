export enum RouteAuthentication {
  REGISTRATION = 'registro',
  LOGIN = 'iniciar-sesion'
}

export const RouteLinkAuthentication = {
  REGISTRATION: RouteAuthentication.REGISTRATION,
  LOGIN: RouteAuthentication.LOGIN,
} as const satisfies RouteAuthenticationType;

type RouteAuthenticationKeyType = keyof typeof RouteAuthentication;
type RouteAuthenticationValueType = string;

type RouteAuthenticationType = Record<RouteAuthenticationKeyType, RouteAuthenticationValueType>;
