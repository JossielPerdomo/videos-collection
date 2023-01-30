import { useEffect, useState } from "react"
import * as VideoService from "./helpers/videoService";
import { Video } from "./interfaces/video";
import { VideoItem } from "./VideoItem";

export const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async() => {
        const resp = await VideoService.getVideos();

        const formatedVideos = resp.videos.map(video => {
            return {
                ...video,
                createdAt: video.createdAt?new Date(video.createdAt):new Date(),
                updatedAt: video.updatedAt?new Date(video.updatedAt):new Date()
            }
        }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        setVideos(formatedVideos);
    }

    useEffect(() => {
      loadVideos();
    }, []);
    

    return (
        <div className="row">
            {
                videos.map(video => (
                    <VideoItem key={video._id} video={video} 
                        loadVideos={loadVideos}
                    />
                ))
            }
        </div>
    )
}
