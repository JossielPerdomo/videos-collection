import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Video } from "./interfaces/video";
import * as VideoService from "./helpers/videoService";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const VideoForm = () => {

    const initialValues  = { title: '', description: '', url: '' };

    const [values, setValues] = useState<Video>(initialValues);

    const { title, description, url } = values;

    const navigate = useNavigate();
    const { id } = useParams();

    const getVideo = async(id: string) => {
        const resp = await VideoService.getVideo(id); 
        const { title, description, url } = resp;

        setValues({ title, description, url })
        
    }

    useEffect(() => {
        if (id) getVideo(id); 
    }, []);
    

    const onInputChange = (e: InputChange) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onFormSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!id) {
            await VideoService.createVideo(values);
            toast.success('New Video added');
        } else {
            await VideoService.updateVideo(id, values);
            toast.success('Video updated');   
        }

        setValues(initialValues);  
        navigate("/"); 
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3 className="mb-3">New Video</h3>

                        <form onSubmit={onFormSubmit}>
                            <div className="form-group mt-2">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Write a title for this video"
                                    name="title"
                                    value={title}
                                    onChange={onInputChange}
                                    autoFocus
                                />
                            </div>
                            <div className="form-group mt-2">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="https://somesite.com"
                                    name="url"
                                    value={url}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="form-group mt-2">
                                <textarea
                                    name="description"
                                    rows={3}
                                    className="form-control"
                                    placeholder="Write a description"
                                    value={description}
                                    onChange={onInputChange}
                                ></textarea>
                            </div>

                            {
                                id ? 
                                <button className="btn btn-primary mt-3">
                                    Update Video
                                </button>
                                :
                                <button className="btn btn-primary mt-3">
                                    Create Video
                                </button>
                            }

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
