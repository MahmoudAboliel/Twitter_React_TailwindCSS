
const FollowsCardEmpty = () => {
  return (
    <div className="card-empty animate-pulse">
        <div className="w-11 h-11 bg-gray-700 rounded-full" />
        <div className="flex-1 flex flex-col gap-1">
            <div className="w-11/12 h-3 bg-gray-700" />
            <div className="w-3/4 h-3 bg-gray-700" />
            <div className="w-3/5 h-3 bg-gray-700" />
        </div>
    </div>
  );
}

export default FollowsCardEmpty;