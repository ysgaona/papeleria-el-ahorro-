const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
      h-full
      flex
      items-center
      justify-center
      pb-2
      pt-2
 
    "
    >
      <div
        className="
        max-w-[800px]
        h-full
        flex
        flex-col
        gap-1
        items-center
        shadow-2xl
        bg-orange-250
        rounded-md
        p-2
        md:p-4
      "
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
