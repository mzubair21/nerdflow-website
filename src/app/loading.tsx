const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal border-opacity-50"></div>
      <span className="ml-4 text-xl font-semibold text-white">
        Loading...
      </span>
    </div>
  );
};

export default Loading;
