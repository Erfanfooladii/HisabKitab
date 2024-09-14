const Navbar=()=>{
    return(
        <nav className='w-full bg-slate-500 rounded-lg shadow-md'>
            <div className="flex items-center justify-between bg-blue-200-300 p-4">
              <input type="text" onChange={(e)=> setState(e.target.value)} placeholder='...جستو جو' className="text-right p-2 text-sm rounded bg-slate-100 text-blue-900" />
              <div className="text-white flex flex-row-reverse gap-2 items-center">
                <button className="flex md:hidden"><span class="material-symbols-outlined">menu</span></button>
                <h2>حساب کتاب</h2>
              </div>
            </div>
        </nav>
    )
}
export default  Navbar;