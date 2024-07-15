export default function AssignPatientModal() {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="mb-4 font-bold text-lg">Assign patient to a doctor</h3>
        <div>
          <input
            className="p-2 rounded-md block w-full border focus:outline-primaryBlue"
            placeholder="search for patiant..."
          />
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </dialog>
  );
}
