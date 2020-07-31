import axios from 'axios'
import { MODAL } from "./types";

export const modal_handler_AC = () => ({ type: MODAL })

// UPLOAD_AVATAR

export const upload_avatar_THUNK = (ava) => dispatch => {
    let formdata = new FormData()
    formdata.append("avatar", ava)
    axios
        .patch('/users/proile_photo/', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res)
        })
} 