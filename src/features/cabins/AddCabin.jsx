import { useState } from "react";
import Button from "./../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
const AddCabin = () => {
  const [showCabinForm, setShowCabinForm] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowCabinForm(true)}>Add New Cabin</Button>
      {showCabinForm && (
        <Modal onClose={() => setShowCabinForm(false)}>
          <CreateCabinForm onCloseModel={() => setShowCabinForm(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
