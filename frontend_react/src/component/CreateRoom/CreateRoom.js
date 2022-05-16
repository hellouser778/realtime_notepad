import logo from "../../public/images/Notepadlogo.png";

const CreateRoom = () => {
  return (
    <>
      <div className="row d-flex justify-content-center align-middle  css_card">
        <div className="col-md-4">
          <div className="shadow">
            <div class="card text-center">
              <div class="card-header">
                {" "}
                <div className=" wrap-logo">
                  <a href="/" class="logo">
                    <img src={logo} alt="logo"></img>
                    <p className="h3 mx-2">liv-e-Pad</p>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Enter Room Id</h5>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Room ID</label>
  <input type="RoomID" class="form-control" id="exampleFormControlInput1" placeholder="Enter Room Id" />
</div>
                <button href="#" class="btn btn-primary">
                  Join
                </button>
              </div>
              <div class="card-footer text-muted">
                Do not have invite link,{" "}
                <a href="#/" class="card-link text-dark">
                  {" "}
                  Create new Room
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateRoom;
