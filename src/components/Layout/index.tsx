export default function Layout({ children } : any) {
    return (
        <>
            <main className="relative">
                <div className="opacity-30 relative pt-[54.1666666667%] after:absolute after:w-full after:h-[100px] after:left-0 after:bottom-0 after:bg-gradient-to-b after:from-[rgba(23,30,29,0)] after:to-[#171e1d]">
                    <video className="absolute top-0 left-0 z-0 w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true} src="https://cdn-hogwartslegacy.warnerbrosgames.com/home/hero.mp4?c=b"></video>
                </div>
                <div className="container absolute top-0 left-0 right-0 z-10 flex items-center justify-center w-full h-auto min-h-screen px-6 py-16 mx-auto lg:py-12">{children}</div>
            </main>
        </>
    )
}