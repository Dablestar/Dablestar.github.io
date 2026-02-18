// Components to send the user comments to the backend and display them on the threads page

export type InternalComment = {
    name: string;
    date: string;
    comment: string;
    password: string;
    ipAddress: string;
}