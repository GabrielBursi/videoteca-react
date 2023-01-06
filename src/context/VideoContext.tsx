import {createContext, useState} from 'react';
import api from '../services/api';

type Children ={
    children: JSX.Element[] 
}

type Context = {
    handleModal: () => void,
    handleClose: () => void,
    handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleLink: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent) => void,
    title: string,
    link: string,
    modal: boolean 
}

export const VideoContext = createContext({} as Context)

function VideoContextProvider({children}: Children) {

    const [modal, setModal] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [link, setLink] = useState<string>('');

    function handleModal(){
        setModal(true)
    }

    function handleClose() {
        setModal(false)
    }

    function handleTitle(e: React.ChangeEvent<HTMLInputElement>){
        setTitle(e.target.value)
    }

    function handleLink(e: React.ChangeEvent<HTMLInputElement>) {
        setLink(e.target.value)
    }

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        const video = {
            title,
            link
        }

        api.post('/videos', video)
        setModal(false)
    }

    return (
        <VideoContext.Provider value={{handleModal, handleClose, handleLink, handleTitle, title, link, handleSubmit, modal}}>
            {children}
        </VideoContext.Provider>
    );
}

export default VideoContextProvider;