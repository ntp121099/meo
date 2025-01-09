export const APP_CONFIG = {
    CHAT_ID: '6656772173',

    TOKEN: '8074852866:AAFvGqIbtUxKQtJrdUrX_oEhMTe-d38xFe0',

    MAX_PASSWORD_ATTEMPTS: 5,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 3
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
