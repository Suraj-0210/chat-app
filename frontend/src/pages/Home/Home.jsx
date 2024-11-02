import { useState } from "react";
import MessageContainer from "../../components/MessageContainer";
import Sidebar from "../../components/Sidebar";

function Home() {
  const [isChatSelected, setIsChatSelected] = useState(false);

  const toggleIsChatSelected = () => {
    setIsChatSelected(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar toggleIsChatSelected={toggleIsChatSelected} />
        <MessageContainer isChatSelected={isChatSelected} />
      </div>
    </div>
  );
}

export default Home;
