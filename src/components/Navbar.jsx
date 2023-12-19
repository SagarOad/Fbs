const Navbar = () => {
  return (
    <div className=" w-full bg-white shadow-2xl z-50">
      <div className=" lg:mx-44 2xl:mx-72">
        <div className="navbar bg-base-100 ">
          <div className="flex-1">
            <a className="btn btn-ghost text-[#25aae1] font-[cabinet-extrabold] text-[2.5rem]">fbs</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Link</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <a className="">Link 1</a>
                    </li>
                    <li>
                      <a className=" menu-link">Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
