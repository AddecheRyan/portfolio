import Blackjack from "@/project-pages/Blackjack.mdx";

export default function BlackjackPage() {

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <article className="w-full max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold text-baltic mb-2">Real-Time Multiplayer Blackjack</h1>
        <p className="text-lg text-teal mb-4">Ryan Addeche</p>
        <p className="text-lg text-teal">Live Link: <a href="https://blackjack-typescript-d5mw.onrender.com" className="text-mint hover:text-baltic">https://blackjack-typescript-d5mw.onrender.com</a></p>
        <p className="text-lg text-teal">GitHub Repository: <a href="https://github.com/AddecheRyan/blackjack-typescript" className="text-mint hover:text-baltic">https://github.com/AddecheRyan/blackjack-typescript</a></p>
        <hr className="border-mint mb-8" />
        <div className="markdown">
            <Blackjack/>
        </div>
      </article>
    </div>
    
  );
}