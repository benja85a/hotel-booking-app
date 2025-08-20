
const Title = ({ title, subTitle, align, font }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${
        align === "left" && "md:items-start md:text-left"
      }`}
    >
      <h1 className={`text-1xl md:text-[30px] ${font || "font-playfair"}`}>
        {title}
      </h1>
      <p className="text-sm md:text-sm text-gray-500/90 mt-1 max-w-150">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
