interface BackDropProps {
  onClick: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className="z-20 bg-slate-200 opacity-50 w-screen h-screen fixed top-0 left-0"
    ></div>
  );
};

export default BackDrop;
