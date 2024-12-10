
const Loading = () => {
  return (
    <div className="relative flex justify-center items-center p-10 border border-bc">
        <span className="absolute w-11 h-11 rounded-full border-8 border-[#03a9f445]" />
        <span className="absolute w-11 h-11 rounded-full animate-spin border-l-4 border-r-4 border-primary" />
    </div>
  );
}

export default Loading;