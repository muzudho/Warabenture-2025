declare global {
    namespace NodeJS {
        interface Process {
            server: boolean;
            //browser: boolean;
        }
    }
}

export {};
