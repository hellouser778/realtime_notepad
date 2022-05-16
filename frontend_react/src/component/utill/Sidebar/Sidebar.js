import React from "react";
import "../../../public/assets/css/default.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
     
<>
<nav class="admin__nav">
          <div class="list-group mt-2 p-2">
            <a
              href="/"
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              Dashboard
            </a>
            <Link
              to="/RealtimeEditor"
              class="list-group-item list-group-item-action "
              aria-current="true"
            >
              Notepad
            </Link>
            <a href="/contacts" class="list-group-item list-group-item-action">
              Contacts
            </a>
            <a href="/bookmarks" class="list-group-item list-group-item-action">
              bookmarks
            </a>
            <a href="/profile" class="list-group-item list-group-item-action">
              profile
            </a>
          </div>
        </nav></>
  );
};

export default Sidebar;
