import Image from "next/image";
export default function Hero() {
    return (
        <section className="min-h-[70vh] w-full px-6 py-16 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">
                    Hi, I'm
                </p>
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                    Kumud Verma
                </h1>


                <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                    A Software Developer Engineer and Full Stack Developer who enjoys building
                    modern web applications and exploring AI.
                </p>

               
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <Image
                    src="/hero-girl.gif"
                    alt="professional image"
                    width={400}
                    height={400}
                    className="h-auto w-full max-w-100 object-contain"
                />
            </div>
        </section>
    );
}