export default ({ children }) => {
    return (
        <div className="flex justify-center items-center w-full">
          <div className="bg-fragment_background p-3 rounded-md flex flex-col gap-y-3 w-2/3">
              {children}
          </div>
        </div>
    )
}
