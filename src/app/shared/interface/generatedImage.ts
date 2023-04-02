interface base64json {
    b64_json: string
}

export interface GeneratedImage {
    created: any,
    prompt: string,
    filename: string,
    url?: string
}

export interface ResponseGeneratedImage {
    created: any
    data: [base64json]
}