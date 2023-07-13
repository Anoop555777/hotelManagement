import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "./../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signin, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
    onError: (error) => {
      console.log(error);
      toast.error("Sorry! something went wrong please try again");
    },
  });

  return { signin, isLoading };
}
