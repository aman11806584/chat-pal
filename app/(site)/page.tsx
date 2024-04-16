import AuthForm from './components/AuthForm';
import Image from 'next/image';
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full">

      <div className="bg-gray-100 p-10 w-full">
        <div className="sm:mx-auto flex flex-col justify-center h-full sm:w-full sm:max-w-md w-full">
          <Image
            alt="logo"
            className="mx-auto w-auto"
            height={64}
            width={64}
            src="/images/logo.png"
          />

          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 tracking-tight">
            Wellcome to ChatPal
          </h2>

          {/* Auth Form */}
          <AuthForm />
          <div className={"flex flex-col justify-center items-center mt-6 gap-2"}>

            <div className={"flex flex-row gap-4"}>
              {connect.map((item) => {
                return <Link target={"_blank"} href={item.to} key={item.title}>{item.icon}</Link>
              })}
            </div>
            <div className={"flex flex-row justify-center items-center text-gray-500"}>
              <h2>Created by &nbsp;</h2>
              <Link target={"_blank"} className={"underline text-blue-500 hover:text-blue-600"} href={"https://github.com/kushwahramkumar2003"}>@Ramkumar</Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

const connect = [
  {
    title:"LinkedIn",
    to:"https://www.linkedin.com/in/ramkumar-kushwah-418733204",
    icon:<FaLinkedin size={25}/>,
  },{
    title:"Twitter",
    to:"https://twitter.com/Ramkuma82764388",
    icon:<IoLogoTwitter size={25}/>,
  },{
    title:"Github",
    to:"https://github.com/kushwahramkumar2003",
    icon:<FaGithub size={25}/>,
  },
]
