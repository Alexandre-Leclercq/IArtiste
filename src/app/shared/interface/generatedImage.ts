interface url {
    url: string
}

export interface GeneratedImage {
    created: any,
    prompt: string,
    url: string
}

export interface ResponseGeneratedImage {
    created: any
    data: [url]
}