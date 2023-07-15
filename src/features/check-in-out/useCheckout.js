import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckout = () => {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: checkoutLoading } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({
        queryKey: { active: true },
      });
    },

    onError: (error) => toast.error("There is an error while Checking out"),
  });

  return { checkout, checkoutLoading };
};
