export default function BlurBox({children}){
    return <div className="flex flex-col items-center justify-center bg-tranparent_ shadow-box_shadow_main_box backdrop-blur-md w-8/12 px-12 pt-20 fixed top-50 left-50 -translate-x-2/4 -translate-y-2/4 rounded-md">{children}</div>
}