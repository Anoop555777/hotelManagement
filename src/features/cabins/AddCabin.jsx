import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CabinTable from "./CabinTable";

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add to Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};
// const AddCabin = () => {
//   const [showCabinForm, setShowCabinForm] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setShowCabinForm(true)}>Add New Cabin</Button>
//       {showCabinForm && (
//         <Modal onClose={() => setShowCabinForm(false)}>
//           <CreateCabinForm onCloseModel={() => setShowCabinForm(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabin;
