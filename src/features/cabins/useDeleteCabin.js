import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinAPI } from "./../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const {
    isLoading: isDeleting,
    error,
    mutate: deleteCabin,
  } = useMutation({
    mutationFn: (cabinId) => deleteCabinAPI(cabinId),
    onSuccess: () => {
      toast.success("cabin delete successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, error, deleteCabin };
}
