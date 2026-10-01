import Image from "next/image";
export default function Hero() {
    return (
        <section>
            <div>
                <p>Hi, I'm</p>
                <h1>Kumud Verma</h1>


                <p>
                    A Software Developer Engineer and Full Stack Developer who enjoys building modern web applications and exploring AI.
                </p>

               
            </div>

            <div>
                <Image
                    src="/hero-girl.gif"
                    alt="professional image"
                    width={400}
                    height={400}
                />
            </div>
        </section>
    );
}