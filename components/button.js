export default function Button({value}){
    return(
        <input className="w-96 hover:bg-btn_transparent_hover font-press-start text-2xl text-center text-blue-900 rounded-full bg-btn_transparent backdrop-blur-md px-10 py-10 mb-5" type="submit" value={value} />
    )
}