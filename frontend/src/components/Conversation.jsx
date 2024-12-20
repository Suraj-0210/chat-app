export default function Conversation({ toggleIsChatSelected }) {
  return (
    <>
      <div
        className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer"
        onClick={toggleIsChatSelected}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=suryakant0210"
              alt="user avatar "
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl"> 🥺</span>
          </div>
        </div>
      </div>
    </>
  );
}
