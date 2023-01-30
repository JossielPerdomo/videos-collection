import { Video, VideoLi } from "../interfaces/video";

const API = 'http://localhost:8080/api';

export const getVideos = async(): Promise<VideoLi> => {
    const resp = await fetch(`${API}/videos`);
    return await resp.json();
}

export const getVideo = async(id: string): Promise<Video> => {
    const resp = await fetch(`${API}/videos/${id}`);
    return await resp.json();
}

export const createVideo = async (video: Video) => {
    const resp = await fetch(`${API}/videos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(video)
    });

    return await resp.json();
}

export const updateVideo = async (id: string, video: Video) => {
    const resp = await fetch(`${API}/videos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(video)
    });

    return await resp.json();
}

export const deleteVideo = async (id: string ) => {
    const resp = await fetch(`${API}/videos/${id}`, {
        method: 'DELETE'
    });

    return await resp.json();
}