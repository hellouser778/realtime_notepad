import Header from "../component/utill/Header/Header";
import Footer from "../component/utill/Footer/Footer";
import Sidebar from "../component/utill/Sidebar/Sidebar";

import "../public/assets/css/default.css";

const Maindashboard = () => {
  return (
    <>
      <div class="admin">
        <Header />
        <Sidebar />

        <main class="admin__main">
          <h4>Dashboard</h4>
          <div class="">
            <div class=" m-4">
              <div class="row">
                <div className="col-md-4 ">
                  <div class="card bg-primary shadow-sm">
                    <div class="">
                      <h5 class="card-title">Total Notes</h5>
                      <h6 class="card-subtitle mb-2 text-white">
                        Card subtitle
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 shadow-sm">
                  <div class="card bg-primary ">
                    <div class="">
                      <h5 class="card-title">Active User</h5>
                      <h6 class="card-subtitle mb-2 text-white">
                        Card subtitle
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="card bg-primary  shadow-sm">
                    <div class="">
                      <h5 class="card-title ">Recent query</h5>
                      <h6 class="card-subtitle mb-2 text-white">
                        Card subtitle
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* //hr tag  */}

            <hr />
            {/* //table   */}

            <div className="row">
              <div className="col-md-8">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4 ">
                <div class="card bg-light">
                  <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                      <li class="nav-item">
                        <a class="nav-link" href="/">
                          Link
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link disabled"
                          href="/"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="">
                    <figure class="text-end">
                      <blockquote class="blockquote">
                        <p>
                          A well-known quote, contained in a blockquote element.
                        </p>
                      </blockquote>
                      <figcaption class="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </figcaption>
                    </figure>
                    <a href="/" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};
export default Maindashboard;
