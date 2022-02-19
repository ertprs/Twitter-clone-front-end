import { FormEvent, useState } from "react"

export const useSettings = () => {
    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState({
        file: {},
        preview: ""
    })

    const selectPhoto = (e: any) => {
        let formData = new FormData()
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        formData.append('profilePicture', file)
        setImage({
            file,
            preview: url
        })
    }
    return {
        selectPhoto,
        inputs,
        image
    }
}