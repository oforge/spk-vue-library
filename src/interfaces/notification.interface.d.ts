export interface NotificationInterface {
    id: number;
    state: string;
    title: string;
    message: string;
    duration?: number;
    timeoutId?: number;
}
export interface NotificationsInterface {
    notifications: NotificationInterface[];
}
