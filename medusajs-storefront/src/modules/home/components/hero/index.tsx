import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Video from "next-video"
import videoLoop from "../../../../../videos/video.mp4"
const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="h-[50vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
        <Video
          src={videoLoop}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          // style={{ mediaObjectFit: "cover" }}
          className
        />
      </div>
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
    </div>
  )
}

export default Hero
