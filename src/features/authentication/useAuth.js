import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logIn } from "./../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => logIn({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("You are successfully logged In");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Please provide correct email and password");
      console.log("Error", error);
    },
  });

  return { login, isLoading };
};
