import "./ModalWindow.scss";

export default function ModalWindow(props: any) {
  const { setOpenModal } = props;

  return (
    <div className="modal-container">
      <span className="x" onClick={() => setOpenModal(false)}>
        X
      </span>
      <div className="header">
        <h1>Customized header</h1>
      </div>
      <div className="modal-body">
        <span>Customized body</span>
      </div>
      <div className="footer">
        <span>Customized Footer</span>
      </div>
    </div>
  );
}
