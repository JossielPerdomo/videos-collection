import { useNavigate } from "react-router-dom";
import { Props } from "./interfaces/video";
import ReactPlayer from "react-player/youtube";
import * as VideoService from "./helpers/videoService";
import './video-item.css';


export const VideoItem = ({ video, loadVideos }: Props) => {

    const navigate = useNavigate();

    const deleteVideo = async(id: string) => {
        await VideoService.deleteVideo(id);
        loadVideos();
    }

    return (
        <div className="col-md-4">
            <div className="card card-body video-card">
                <div className="d-flex justify-content-between">
                    <h1 onClick={() => navigate(`/update/${video._id}`)}>
                        {video.title}
                    </h1>
                    <span className="text-danger" 
                        onClick={() => video._id && deleteVideo(video._id)}
                    >
                        x
                    </span>
                </div>
                <p>{video.description}</p> 
                <ReactPlayer url={video.url} 
                    width= '100%'
                    height='100%'
                />
                
            </div>
        </div>
    )
}
