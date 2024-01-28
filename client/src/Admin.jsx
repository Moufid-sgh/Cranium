import { useState, useRef } from "react"
import axios from "axios"
import { UploadIcon } from "./component/Functions/UploadIcon"
import Auth from "./component/Auth"


const Admin = () => {

  const [access, setAccess] = useState(false)

  const [name, setName] = useState(null)
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  const [soldOut, setSoldOut] = useState(false)

  const [desc_1, setDesc_1] = useState(null)
  const [desc_2, setDesc_2] = useState(null)
  const [desc_3, setDesc_3] = useState(null)
  const [desc_4, setDesc_4] = useState(null)

  const fileRef = useRef(null)
  const [file, setFile] = useState(null)
  const [images, setImages] = useState([])
  const [imageName, setImageNames] = useState([])

  const nameRef = useRef()
  const heightRef = useRef()
  const widthRef = useRef()
  const desc_1Ref = useRef()
  const desc_2Ref = useRef()
  const desc_3Ref = useRef()
  const desc_4Ref = useRef()


  // upload images
  const uploadImage = async (e) => {
    e.preventDefault()

    const form = new FormData()
    form.append('file', file)
    form.append('upload_preset', 'slim_cranium')

    await axios.post('https://api.cloudinary.com/v1_1/dlqxrbov2/upload', form)
      .then(result => {
        if (result.data.secure_url) {
          setImages((prevImages) => [...prevImages, result.data.secure_url])
          setImageNames((prevNames) => [...prevNames, file.name])
          fileRef.current.value = ''
          setFile(null)
        }
      })
      .catch(error => console.log(error));
  }


  //send data---------------------------------------------------------------------//
  const onSubmit = async (e) => {
    e.preventDefault()
    

    let description = [desc_1, desc_2, desc_3, desc_4].filter(desc => desc !== null);
    try {
      await axios.post(`${import.meta.env.VITE_URL}`, {
        model_name: name,
        height: height,
        width: width,
        sold_out: soldOut,
        model_desc: description,
        model_image: images

      }).then((result) => {
        setName(null)
        setHeight(null)
        setWidth(null)
        setDesc_1(null)
        setDesc_2(null)
        setDesc_3(null)
        setDesc_4(null)
        setImageNames([])
        nameRef.current.value = ""
        heightRef.current.value = ""
        widthRef.current.value = ""
        desc_1Ref.current.value = ""
        desc_2Ref.current.value = ""
        desc_3Ref.current.value = ""
        desc_4Ref.current.value = ""
      })
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
      {!access ?
        <Auth setAccess={setAccess} />
        :
        <div className="w-full h-full mb-8 mt-12 mx-2 lg:mx-6">
          <div>
            <h2 className="text-lg font-bold mb-4">Added model</h2>

            <form className="flex flex-col md:flex-row justify-between items-center md:w-[70%] lg:w-[40%]">
              <div className="space-y-6">
                <input type="text" placeholder="name" ref={nameRef} className="p-2 w-72 block border-2 rounded-md capitalize focus:outline-none focus:border-2 focus:border-sky-600"
                  onChange={e => setName(e.target.value)}
                />
                <input type="text" placeholder="height" ref={heightRef} className="p-2 w-72 block border-2 rounded-md focus:outline-none focus:border-2 focus:border-sky-600"
                  onChange={e => setHeight(e.target.value)}
                />

                <input type="text" placeholder="width" ref={widthRef} className="p-2 w-72 block border-2 rounded-md focus:outline-none focus:border-2 focus:border-sky-600"
                  onChange={e => setWidth(e.target.value)}
                />

                <input type="text" placeholder="description 1" ref={desc_1Ref} className="p-2 w-72 block border-2 rounded-md focus:outline-none focus:border-2 focus:border-sky-600"
                  onChange={e => setDesc_1(e.target.value)}
                />

                <input type="text" placeholder="description 2" ref={desc_2Ref} className="p-2 w-72 block border-2 rounded-md focus:outline-none focus:border-2 focus:border-sky-600"
                  onChange={e => setDesc_2(e.target.value)}
                />

                <input type="text" placeholder="description 3" ref={desc_3Ref} className="p-2 w-72 block border-2 rounded-md focus:outline-none focus:border-2 focus:border-sky-600"
                  onChange={e => setDesc_3(e.target.value)}
                />

                <input type="text" placeholder="description 4" ref={desc_4Ref} className="p-2 w-72 block border-2 rounded-md focus:outline-none focus:border-2 focus:border-sky-600"
                  onChange={e => setDesc_4(e.target.value)}
                />

              </div>

              {/* upload images ****************************************/}
              <div className="mt-12 md:mt-0">
                <div className="flex flex-col items-center justify-center md:space-y-8">
                
                <div className="text-lg font-bold flex items-center mb-6 md:mb-0">
                  <label htmlFor="soldout">Sold out</label>
                  <input type="checkbox" id="soldout" value={soldOut} className="w-5 h-5 ml-2"
                         onChange={e => setSoldOut(e.target.checked)} />
                </div>

                  <div className="border-dashed border-2 border-sky-600 w-44 h-32 relative flex items-center justify-center overflow-hidden">
                    <div className="flex-col flex items-center justify-center text-center">
                      {file ? <p className="text-sm">{file.name}</p>
                        :
                        <>
                          {UploadIcon()}
                          <p className="text-sm">Browse file to upload</p>
                        </>}
                    </div>
                    <input type="file" ref={fileRef} onChange={e => setFile(e.target.files[0])} className=" absolute top-0 left-0 w-full h-full opacity-0 z-30" />
                  </div>
                  <button onClick={uploadImage} className="border-2 border-zinc-900 hover:bg-zinc-900 hover:text-slate-200 duration-300 rounded-md mt-5 py-1 px-3">upload</button>
                </div>

                <div className="mt-8 space-y-2">
                  {imageName.map((el, i) => {
                    return <p key={i}><span className="bg-green-300 px-0.5">&#10003;</span> {el}</p>
                  })}
                </div>
              </div>
            </form>

            <div className="text-center md:text-start">
              <button onClick={onSubmit} className="border-2 border-sky-600 bg-sky-600 hover:text-sky-600 hover:bg-transparent text-slate-200 duration-300 rounded-md mt-8 py-1.5 px-5">submit</button>
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default Admin