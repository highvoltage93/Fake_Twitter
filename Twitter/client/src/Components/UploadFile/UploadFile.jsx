import React, { useState, useEffect } from 'react';
import './UploadFile.scss'
import Button from '../UI/Button/Button'
import { upload_avatar_THUNK } from '../../Store/settings_actions';
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
            />}


        </>);
}

let mapDispatchToProps = dispatch => {
    return{
        upload: ava => {
            dispatch(upload_avatar_THUNK(ava))
        }
    }
}

export default connect(null, mapDispatchToProps)(UploadFile)


const Upload = ({ step,upload, setStep, back = false }) => {

    const [file, setFile] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwi1Ym4KxAiXmSpxg1U_9w6LzzPSdvVWWUwQ&usqp=CAU');
    const [poster, setPoster] = useState('https://blogmedia.evbstatic.com/wp-content/uploads/engineering/2018/08/09141147/Flexible-Reusable-React-File-Uploader.png');
    const [fileUpload, setFileUpload] = useState();


    let filehandler = (e) => {
        if (e.target.files.length === 1) {
            const file = e.target.files[0]
            setFileUpload(file)
            const fileReader = new FileReader()
            fileReader.onload = () => setFileUpload(fileReader.result)
            fileReader.readAsDataURL(e.target.files[0])

            upload(e.target.files[0])
        }
    }

    // let sendAva = (e) => {
    //     e.preventDefault()
    //     upload(fileUpload)
    // } 
    return (
        <div className="upl">
            {step === 1 ? <h1>Pick a profile picture</h1> : <h1>Pick a header</h1>}
            {step === 1 ? <h2>Have a favorite salfie? Upload it now</h2> : <h2>People who visit your profile will see it. Show your style.</h2>}

            <form className="upl_inp">
                <label htmlFor="file">
                    <input onChange={filehandler} type="file" name="file" id="file" accept=".jpg, .png, .jpeg" />
                    {step === 1 ? <img src={fileUpload ? fileUpload : file} alt="" /> : <img src={fileUpload ? fileUpload : poster} alt="" />}
                </label>
                <Button  disable={fileUpload ? false : true} color="blue">Save</Button>
                {!back && <Button color="yellow" onClick={() => setStep(step + 1)}>NextStep</Button>}
                {back ? <Button color="yellow" onClick={() => setStep(step - 1)}>PrevStep</Button> : null}
            </form>
        </div>
    )
}