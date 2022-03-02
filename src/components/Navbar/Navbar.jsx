import { Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <h1>Travel Destination</h1>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-3">
        <li class="nav-item">
          <Link class="nav-link active fs-3 " aria-current="page" to='/'>Home</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
