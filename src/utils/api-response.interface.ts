export interface ApiResponseInterface {
    message: string[],
    error?: string,
    statusCode?: number,
    token?: string
}