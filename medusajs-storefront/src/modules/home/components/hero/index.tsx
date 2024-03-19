import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { Video } from "next-video"
import videoLoop from "../../../../../videos/video.mp4"

// import image from "../../../../../videos/delivery-man-show-ok-sign-front-cargo-van-delivering-bottles-water.jpg"

const Hero = () => {
  return (
    <>
      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 md:grid-cols-2">
            {/* <!-- Heading Div --> */}
            <div className="max-w-[720px] lg:max-w-[842px]">
              <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                Zamów wodę do domu lub firmy{" "}
                <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">
                  Już dziś
                </span>
              </h1>
              <p className="mb-6 max-w-[528px] text-xl text-[#636262] md:mb-10 lg:mb-12">
                Woda wprost do Twojego domu lub biura. Zamów już dziś i ciesz
                się świeżą wodą.
              </p>
              <a
                href="#"
                className="mb-6 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mb-10 lg:mb-12"
              >
                Zamów teraz
              </a>
              {/* <!-- Customers Div --> */}
              <div className="mb-4 flex w-full max-w-xs items-center">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905430069fb027f83abb71_Ellipse-3.jpg"
                  alt=""
                  className="inline-block h-12 w-12 rounded-full object-cover [box-shadow:rgb(0,_0,_0)_0px_6px]"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905435069fb009d43abbb1_Ellipse-2.jpg"
                  alt=""
                  className="relative -left-4 -z-[1] inline-block h-12 w-12 rounded-full object-cover [box-shadow:rgb(0,_0,_0)_0px_6px]"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390542e809b5c72a0cdcb99_Ellipse.jpg"
                  alt=""
                  className="relative -left-8 -z-[2] inline-block h-12 w-12 rounded-full object-cover [box-shadow:rgb(0,_0,_0)_0px_6px]"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390543797156ee437ef0425_Ellipse-1.jpg"
                  alt=""
                  className="relative -left-12 -z-[3] inline-block h-12 w-12 rounded-full object-cover [box-shadow:rgb(0,_0,_0)_0px_6px]"
                />
                <div className="relative bottom-0 left-[-80px] right-auto top-auto -z-[4] rounded-[29.25px] bg-[#1353fe] py-2 pl-10 pr-5 text-center text-white [box-shadow:rgb(0,_0,_0)_0px_6px]">
                  <p className="text-sm">
                    <span className="font-bold">
                      Dołącz do setek zadowolnych klientów{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Image Div --> */}
            <div className="relative left-4 h-full max-h-[562px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
              <img
                src="https://i.ibb.co/ykZvRP2/delivery-man-show-ok-sign-front-cargo-van-delivering-bottles-water.jpg"
                alt=""
                className="mx-auto block h-full w-full max-w-[800px] rounded-2xl object-cover"
              />
              <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
              <a
                href="#"
                className="absolute bottom-auto left-[50%] right-auto top-1/2 inline-block max-w-full object-contain font-bold text-[#1353fe] max-[767px]:-translate-x-1/2 max-[767px]:-translate-y-1/2 md:bottom-[-48px] md:left-[-48px] md:right-auto md:top-auto"
              >
                Tylko teraz pierwsze 6 miesięcy za darmo
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Video
          src={videoLoop}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className
        />
      </section>
      <section className="relative bg-[#ffffff]">
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="flex flex-col items-center justify-start max-[767px]:text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">
              <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/63915f9749aaab0572c48dae_Rectangle%2018.svg')] bg-cover bg-center bg-no-repeat px-4 text-white">
                Prosta &amp; tania woda bez pośredników
              </span>{" "}
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">
                Gwarancja najlepszej jakości wody wprost do Twojego domu lub
                biura
              </p>
            </div>
            {/* <!-- Pricing Cards --> */}
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
              <div className="flex w-full max-w-[416px] flex-col items-start rounded-2xl border border-solid border-[#9b9b9b] bg-white px-8 pb-12 pt-8">
                <div className="mb-4 rounded-lg bg-[#1353fe] px-5 py-2">
                  <p className="text-sm font-bold text-white">BASIC</p>
                </div>
                <p className="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit
                </p>
                <h2 className="mb-4 text-left text-3xl font-semibold md:text-5xl">
                  $99<span className="text-sm font-light">/year</span>
                </h2>
                <div className="mt-2 flex flex-row items-center text-left">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Premium Designs</p>
                </div>
                <div className="mt-2 flex flex-row items-center text-left">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Exclusive Freebies</p>
                </div>
                <div className="mt-2 flex flex-row items-center text-left">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Monthly Free Exclusive</p>
                </div>
                <div className="mb-6 mt-2 flex flex-row items-center md:mb-10 lg:mb-12">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Customer Support</p>
                </div>
                <a
                  href="#"
                  className="mx-auto inline-block rounded-xl bg-black px-7 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]"
                >
                  Get started
                </a>
              </div>
              <div className="flex w-full max-w-[416px] flex-col items-start rounded-2xl border border-solid border-[#9b9b9b] bg-[#376dfd] px-8 pb-12 pt-8 text-white [box-shadow:rgb(0,_0,_0)_6px_6px]">
                <div className="mb-4 rounded-lg bg-black px-5 py-2">
                  <p className="text-sm font-bold text-white">GROWTH</p>
                </div>
                <p className="mb-6 font-light md:mb-10 lg:mb-12">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit
                </p>
                <h2 className="mb-4 text-left text-3xl font-semibold md:text-5xl">
                  $149<span className="text-sm font-light">/year</span>
                </h2>
                <div className="mt-2 flex flex-row items-center text-left">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980ab08447c8da5bd93d77_akar-icons_circle-check-fill%20(2).svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Premium Designs</p>
                </div>
                <div className="mt-2 flex flex-row items-center text-left">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980ab08447c8da5bd93d77_akar-icons_circle-check-fill%20(2).svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Exclusive Freebies</p>
                </div>
                <div className="mt-2 flex flex-row items-center text-left">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980ab08447c8da5bd93d77_akar-icons_circle-check-fill%20(2).svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Monthly Free Exclusive</p>
                </div>
                <div className="mb-6 mt-2 flex flex-row items-center md:mb-10 lg:mb-12">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980ab08447c8da5bd93d77_akar-icons_circle-check-fill%20(2).svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Customer Support</p>
                </div>
                <a
                  href="#"
                  className="mx-auto inline-block rounded-xl bg-black px-7 py-4 text-center font-semibold text-white [box-shadow:rgb(255,_255,_255)_6px_6px]"
                >
                  Get started
                </a>
              </div>
              <div className="flex w-full max-w-[416px] flex-col items-start rounded-2xl border border-solid border-[#9b9b9b] bg-white px-8 pb-12 pt-8">
                <div className="mb-4 rounded-lg bg-[#1353fe] px-5 py-2">
                  <p className="text-sm font-bold text-white">PRO</p>
                </div>
                <p className="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit
                </p>
                <h2 className="mb-4 text-left text-3xl font-semibold md:text-5xl">
                  $249<span className="text-sm font-light">/year</span>
                </h2>
                <div className="mt-2 flex flex-row items-center text-left">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Premium Designs</p>
                </div>
                <div className="mt-2 flex flex-row items-center text-left">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Exclusive Freebies</p>
                </div>
                <div className="mt-2 flex flex-row items-center text-left">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Monthly Free Exclusive</p>
                </div>
                <div className="mb-6 mt-2 flex flex-row items-center md:mb-10 lg:mb-12">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b065a0f8d592_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p>Customer Support</p>
                </div>
                <a
                  href="#"
                  className="mx-auto inline-block rounded-xl bg-black px-7 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
          alt=""
          className="absolute bottom-auto left-auto right-0 top-0 -z-10 inline-block max-[479px]:hidden"
        />
      </section>
      {/* <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
        <div className="h-[50vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle"></div>
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
          <span>
            <Heading
              level="h1"
              className="text-5xl leading-10 text-ui-fg-base font-normal"
            >
              Woda dla domu i firmy
            </Heading>
          </span>
        </div>
      </div> */}
      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Heading Div --> */}
          <div className="mx-auto w-full max-w-3xl">
            {/* <!-- Component --> */}
            <div className="text-center">
              <p className="uppercase text-[#1353fe]">3 easy steps</p>
              <h2 className="text-3xl font-semibold capitalize md:text-5xl">
                How it{" "}
                <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center bg-no-repeat px-4 text-white">
                  works
                </span>
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam,purus sit amet luctus magna fringilla urna
                </p>
              </div>
            </div>
          </div>
          {/* <!-- How it Works Div -->/ */}
          <div className="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8">
            {/* <!-- How it Works Item --> */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                <p className="text-xl font-bold">1</p>
              </div>
              <p className="mb-2 text-xl font-semibold">Find Component</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639833af1925275b6f0b43e1_Vector%2032.svg"
                alt=""
                className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[18%] md:inline-block lg:left-auto"
              />
            </div>
            {/* <!-- How it Works Item --> */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                <p className="text-xl font-bold">2</p>
              </div>
              <p className="mb-2 text-xl font-semibold">Copy and Paste</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639834731925279c5e0b4ee5_Vector%2033.svg"
                alt=""
                className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[8%] md:inline-block lg:left-auto"
              />
            </div>
            {/* <!-- How it Works Item --> */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                <p className="text-xl font-bold">3</p>
              </div>
              <p className="mb-2 text-xl font-semibold">Done!</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
