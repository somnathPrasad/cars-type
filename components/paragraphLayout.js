import parah from "./parah"
import Script from "next/script"
export default function ParaLayout(){

    
    return(
        <div className="bg-tranparent_ shadow-box_shadow_main_box backdrop-blur-md flex justify-center items-center w-2/4 max-h-1/4 mt-5 rounded-md">
        {/* length of the para should not be greater than 231 characters */}
            <p className="text-2xl text-center">{}</p>
            {/* <script> 
                function createRandomParah(randomParah){
                     
                }
            </script> */}
        </div>
    )
}