import { Input, MessageInput } from "@/components/input/input";
import { FullButton } from "@/components/button/button";

export default function Contact() {
  return (
    <div className="p-[10vw]">
      <div className="mb-[10vh]">
        <h2 className="text-base md:text-lg">Contact Us</h2>
        <p>Fill out the form below to get in touch with us.</p>
      </div>
      <div className="sm:flex justify-between sm:space-x-[5vw] mb-[5vh]">
        <Input label="Name" type="text" />
        <Input label="Email" type="text" />
      </div>
      <MessageInput label="Type your message here" type="text" />
      <div className="flex justify-end">
        <FullButton
          text="SEND"
          link="/sent"
          colour="border-matcha1 hover:bg-matcha"
          textColour="text-matcha1 hover:text-white"
        />
      </div>
    </div>
  );
}
