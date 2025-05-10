import {FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa"

function Footer(){
    return(
        <div className="bg-black text-white text-center g-10 p-4">
            <p>© 2025 MyWebsite. All Rights Reserved.</p>
            <div className="mt-5 flex items-center justify-center gap-4 text-blue-400">
                <FaFacebook/><p>Facebook</p>
                <FaInstagram/><p>Instagram</p>
                <FaTwitter/><p>Twitter</p>
            </div>
        </div>
    )
}
export default Footer