export enum RoutePortal {
  PRESENTATION = 'presentación',
  GROUPS = 'grupos',
  PROFILE = 'perfil',
}

export const RouteLinkPortal = {
  PRESENTATION: RoutePortal.PRESENTATION,
  GROUPS: RoutePortal.GROUPS,
  PROFILE: RoutePortal.PROFILE,
} as const satisfies RoutePortalType;

type RoutePortalKeyType = keyof typeof RoutePortal;
type RoutePortalValueType = string;

type RoutePortalType = Record<RoutePortalKeyType, RoutePortalValueType>
