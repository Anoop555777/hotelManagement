import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "./../../services/apiSettings";
import { toast } from "react-hot-toast";
export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("cabin is edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, mutate };
}
