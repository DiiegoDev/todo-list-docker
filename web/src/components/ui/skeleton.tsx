export function Skeleton() {
  return(
    <div className="flex justify-between items-center gap-4">
      <div className="flex-auto h-7 rounded-md bg-gray-800 animate-pulse"/>

      <div className="flex gap-1">
        <div className="w-7 h-7 rounded  bg-gray-700 animate-pulse"/>
        <div className="w-7 h-7 rounded  bg-gray-700 animate-pulse"/>
      </div>
    </div>
  )
}