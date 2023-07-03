import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createEditCabin } from "./../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ cabinEdit, editId }) => createEditCabin(cabinEdit, editId),
    onSuccess: () => {
      toast.success("cabin is edited successfully");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
