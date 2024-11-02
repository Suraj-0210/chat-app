import Conversation from "./Conversation";

export default function Conversations({ toggleIsChatSelected }) {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation toggleIsChatSelected={toggleIsChatSelected} />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
}
