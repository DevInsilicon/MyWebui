import Image from "next/image";
import ChatListHolder from "./Components/Client/ChatListHolder";

export default function Home() {
  return <div className="h-full">
    <ChatListHolder />
  </div>;
}
