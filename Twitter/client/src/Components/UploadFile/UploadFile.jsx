import React, { useState, useEffect } from 'react';
import './UploadFile.scss'
import Button from '../UI/Button/Button'
import { upload_avatar_THUNK, upload_poster_THUNK } from '../../Store/settings_actions';
import {connect} from 'react-redux'

const UploadFile = (props) => {
    const [step, setStep] = useState(1)
    return (
        <>
            {step === 1 && <Upload
                step={step}
                setStep={setStep}
                upload={props.upload}
               
                />}
            {step === 2 && <Upload
                step={step}
                setStep={setStep}
                back={true}
                uploadPoster={props.uploadPoster}
            />}


        </>);
}

let mapDispatchToProps = dispatch => {
    return{
        upload: ava => {
            dispatch(upload_avatar_THUNK(ava))
        },
        uploadPoster: poster => {
            dispatch(upload_poster_THUNK(poster))
        }
    }
}

export default connect(null, mapDispatchToProps)(UploadFile)


const Upload = ({ step,upload, setStep, uploadPoster, back = false }) => {

    const [file, setFile] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwi1Ym4KxAiXmSpxg1U_9w6LzzPSdvVWWUwQ&usqp=CAU');
    const [poster, setPoster] = useState('https://blogmedia.evbstatic.com/wp-content/uploads/engineering/2018/08/09141147/Flexible-Reusable-React-File-Uploader.png');
    const [fileUpload, setFileUpload] = useState();
    const [posterUpload, setPosterUpload] = useState();


    let filehandler = (e) => {
        if ( step === 1) {
            setFileUpload( e.target.files[0])
            const fileReader = new FileReader()
            fileReader.onload = () => setFileUpload(fileReader.result)
            fileReader.readAsDataURL(e.target.files[0])
            upload(e.target.files[0])
        } else {
            setPosterUpload( e.target.files[0])
            const fileReader = new FileReader()
            fileReader.onload = () => setPosterUpload(fileReader.result)
            fileReader.readAsDataURL(e.target.files[0])
            uploadPoster(e.target.files[0])
        }
    }

   
    return (
        <div className="upl">
            {step === 1 ? <h1>Pick a profile picture</h1> : <h1>Pick a header</h1>}
            {step === 1 ? <h2>Have a favorite salfie? Upload it now</h2> : <h2>People who visit your profile will see it. Show your style.</h2>}

            <form className="upl_inp">
                <label htmlFor="file">
                    <input onChange={filehandler} type="file" name="file" id="file" accept=".jpg, .png, .jpeg" />
                    {step === 1 ? <img src={fileUpload ? fileUpload : file} alt="" /> : <img src={posterUpload ? posterUpload : poster} alt="" />}
                </label>
                {!back && <Button onClick={() => setStep(step + 1)} disable={fileUpload ? false : true} color="blue">Save</Button>}
                {back && <Button disable={fileUpload ? false : true} disable={posterUpload ? false : true} color="blue">Save</Button>}
                {!back && <Button color="yellow" onClick={() => setStep(step + 1)}>NextStep</Button>}
                {back ? <Button color="yellow" onClick={() => setStep(step - 1)}>PrevStep</Button> : null}
            </form>
        </div>
    )
}