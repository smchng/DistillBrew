import { Input, MessageInput } from "@/components/input/input";
import { PlaceholderButton } from "@/components/button/button";

export default function Contact() {
  return (
    <div className="p-[10vw]">
      <div className="mb-[10vh]">
        <h2>Contact Us</h2>
        <p>Fill out the form below to get in touch with us.</p>
      </div>
      <div className="flex justify-between space-x-[5vw] mb-[5vh]">
        <Input label="Name" type="text" />
        <Input label="Email" type="text" />
      </div>
      <MessageInput label="Type your message here" type="text" />
      <PlaceholderButton text="SEND" />
    </div>
  );
}
