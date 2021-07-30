
export default class SystemException extends Error {
    constructor(
        message: string|undefined,
        public code?: string|undefined,
    ) {
        super(message);
        this.name = 'SystemException';
    }
}
