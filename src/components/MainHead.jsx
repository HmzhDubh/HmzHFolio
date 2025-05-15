import mainImg from '../assets/main_img.png'

export default function MainHead(){

    return (
        <>
            <div className="flex justify-evenly mt-32 mb-16 items-center">

                <div className="text-indigo-800">
                    <div className="text-6xl mb-10 font-black">
                        <h6>Hello, I'm HmzH</h6>
                        <h1>Programmer</h1>
                        <h1>Photographer</h1>
                    </div>
                    <a href="/about" className="px-5 py-3 bg-red-500 rounded-full text-indigo-200">Read About Me</a>
                </div>

                <div>
                    <img src={mainImg} width="450"></img>

                </div>
            </div>
        </>


    )
}