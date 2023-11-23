const TopHeader = () => {
  return (
    <div className="flex justify-between items-center	 px-6 h-10 bg-slate-600">
      <div className="text-white	">
        <i className="bi bi-basket  text-2xl	"></i>
        <b className="p-3 text-2xl	cursor-pointer		">نون</b>
      </div>

      <div className=" text-yellow-400	font-semibold	">أهلا وسهلا بكم</div>

      <div className="text-white	">
        <b>123-456-789</b>
        <i className="bi bi-telephone text-xl	 p-1"></i>
      </div>
    </div>
  );
};

export default TopHeader;
