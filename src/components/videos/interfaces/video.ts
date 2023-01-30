export interface Video {   
    description: string,
    title: string,
    url: string,
    createdAt?: string | Date,
    updatedAt?: string | Date,
    _id?: string 
}

export interface VideoLi {
    videos: Video[];
}

export interface Props {
    video: Video
    loadVideos: () => void;
}