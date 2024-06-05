const Action = ({ setModalOpen }) => {
  const onNewTransaction = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button
        onClick={onNewTransaction}
        className="w-full rounded-lg bg-[#DCE2F0] py-3 transition duration-300 hover:bg-opacity-70"
      >
        <span className="font-bold text-[#50586C]">New TX</span>
      </button>
    </div>
  );
};

export default Action;
