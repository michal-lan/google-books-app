export type BookCardProps = {
    book : BookProps;
}

export type BookProps = {
    id : string;
    volumeInfo ?: {
        title ?: string;
        previewLink ?: string;
        imageLinks ?: {
            thumbnail ?: string;
        }
        authors: string[];
    };
}