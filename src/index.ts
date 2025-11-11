export type DeviceInfoInput = {
  userAgent?: string | null
  platform?: string | null
  appVersion?: string | null
}

export type PushSubscriptionKeys = {
  p256dh: string
  auth: string
}

export type PushSubscriptionInput = {
  endpoint: string
  keys: PushSubscriptionKeys
  expirationTime?: number | null | undefined
}

export type AgentScheduleDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday"

export type AgentScheduleTimeRange = {
  start: string
  end: string
}

export type AgentScheduleWeekly = Record<AgentScheduleDay, AgentScheduleTimeRange[]>

export type AgentScheduleException = {
  date: string
  closed: boolean
  hours?: AgentScheduleTimeRange[] | null
}

export type AgentScheduleInput = {
  timezone: string
  weekly: AgentScheduleWeekly
  exceptions?: AgentScheduleException[] | null
}
