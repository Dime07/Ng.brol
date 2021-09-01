import herobg from "../Images/hero-bg.png"
import heroilus from "../Images/hero-ilus.png"
export default function Hero(){
    return (
        <div className="bg-cover w-100 h-100 bg-cover px-10 py-15 grid-cols-2 flex justify-center" style={{backgroundImage: `url(${herobg})`}}>

            <div className="left text-white my-auto">
                <p className="text-4xl font-semibold w-4/5">
                    Start chatting with your friend
                </p>
                <p className="mt-2">
                    You can chat and talk about everything with yout friend
                </p>
                <button >Try it now</button>
            </div>

            <div className="right">
                <img className="w-100" src={heroilus} alt="" />
            </div>
        </div>
    )
}