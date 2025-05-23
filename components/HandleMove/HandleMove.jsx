export default function HandleMove() {
  return (
    <div className="flex justify-start items-center my-3">
      <div className="relative w-36 h-1 bg-blue-200 rounded-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-300 rounded-full animate-slide"></div>
      </div>
    </div>
  );
}
