import React from 'react';

const Nav = ({search,setSearch}) => {
    return (
        <div className="navbar bg-base-100 pt-3">
  <div className="flex-1">
    <p className="text-2xl font-bold text-blue-500">GlobePeek</p>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" value={search} onChange={(e) =>setSearch( e.target.value)}/>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile Image"
            src='/src/assets/icn.jpg'/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Nav;