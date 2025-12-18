export type DeviceInfoInput = {
  userAgent?: string | null | undefined
  platform?: string | null | undefined
  appVersion?: string | null | undefined
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
  hours?: AgentScheduleTimeRange[] | undefined
}

export type AgentScheduleInput = {
  timezone: string
  weekly: AgentScheduleWeekly
  exceptions?: AgentScheduleException[] | undefined
}

export type TransferredLead = {
  callId: string
  leadId: string
  transferBridgedAt: number
  phoneNumber: string
  customerFullName?: string | null | undefined
  customerAddress?: string | null | undefined
  customerCity?: string | null | undefined
  customerState?: string | null | undefined
  customerZip?: string | null | undefined
  customerEmail?: string | null | undefined
  comments?: string | null | undefined
  originalRecordingCallId?: string | null | undefined
  transferRecordingCallId?: string | null | undefined
}

export type TransferredLeadRecording = {
  callId: string
  label: "Pre-Transfer Recording" | "Sales Call Recording"
  recordingType: "original" | "transfer"
  storageId: string
}
