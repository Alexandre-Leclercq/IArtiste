interface b64_json {
    b64_json: string
}

export interface GeneratedImage {
    created: any
    b64_json: string;
}

export interface ResponseGeneratedImage {
    created: any
    data: [b64_json];
}