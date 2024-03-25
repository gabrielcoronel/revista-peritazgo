export default ({ image, caption }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center p-3 gap-y-3 bg-fragment_background rounded-md w-1/4">
        <img
          className="w-full rounded-md cursor-pointer"
          src={image}
          onClick={() => window.open(image)}
        />

        <span
          className="text-md italic text-regular_text"
        >
          {caption}
        </span>
      </div>
    </div>
  )
}
