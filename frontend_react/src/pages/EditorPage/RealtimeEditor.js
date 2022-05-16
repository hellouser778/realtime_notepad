import Footer from "../../component/utill/Footer/Footer";
import Header from "../../component/utill/Header/Header";
import Sidebar from "../../component/utill/Sidebar/Sidebar";
import "../../public/assets/css/default.css";
const RealtimeEditor = () => {
  return (
    <>
      {" "}
      <div class="admin">
        <Header />
        <Sidebar />
        <main class="admin__main">
          <h4>Note Editor</h4>

          <div className="row"></div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};
export default RealtimeEditor;
