import { CopyEmail } from "@/app/_components/email";

export default async function Home() {

  return (
    <main className="w-screen mt-6">
      <div className="flex flex-col mx-auto w-full md:w-3/4 lg:w-1/2 px-4">
        <div className="flex gap-6 text-left">
          <img src="ryanAddeche.jpg" alt="Ryan Addeche" className="rounded-full w-48 h-48 shadow-lg"></img>
          <div>
            <h1 className="text-5xl font-bold">Hey! I'm Ryan</h1>
            <p className="text-lg">Aspiring Software Engineer with a solid foundation in various programming concepts, seeking to enhance technical expertise through hands-on experience in a dynamic job opportunity that is focused on contributing to a greater cause.  </p>
            <div className="flex gap-4 mt-4 items-center">
              <a href="ryan-addeche-resume.pdf" target="_blank" className="inline-block rounded-lg bg-gray-300 px-5 py-2 font-bold transition-colors hover:bg-gray-400">
                VIEW RESUME
              </a>
              <a href="https://www.github.com/AddecheRyan" target="_blank" className="transition-opacity hover:opacity-70">
                <img src="github-brands-solid-full.svg" alt="github" className="w-12 h-12"></img>
              </a>
              <a href="https://www.linkedin.com/in/ryan-addeche-829732292/" target="_blank" className="transition-opacity hover:opacity-70">
                <img src="linkedin-brands-solid-full.svg" alt="linkedin" className="w-12 h-12"></img>
              </a>
              <CopyEmail />
            </div>
          </div>
        </div>
        <hr className="w-7/8 lg:w-full md:w-full border-mint my-4 mx-auto"></hr>
        <div className="rounded-xl p-6">
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="space-y-4 text-lg">
            <p>Hi there! My name is Ryan Addeche and I am a software engineer based in the Greater Boston Area. I have recently completed my Bachelor&apos;s degree in Computer Science at Worcester Polytechnic Institute.</p>
            <p>Throughout my academic journey, I have had the opportunity to work on various projects that have honed my skills in areas such as web development, data structures, and algorithms. I am particularly interested in full-stack development and am always eager to learn new technologies and frameworks. I am excited about the prospect of joining a team where I can contribute my skills and knowledge while also learning from others.</p>
            <p>Thank you for visiting my website! While you are here please check out some of the projects I have worked on. If you have any questions or would like to connect with me, please don&apos;t be a stranger!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
