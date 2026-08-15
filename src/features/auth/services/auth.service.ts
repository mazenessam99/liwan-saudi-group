import { supabase } from "@/lib/supabase";
import type {
    SignUpFormValues,
    SignInFormValues,
} from "../schemas/auth-schema";

// Register
export const signUpUser = async (values: SignUpFormValues) => {
    return await supabase.auth.signUp({
        email: values.email,
        password: values.password,

        options: {
            data: {
                firstName: values.firstName,
                lastName: values.lastName,
                phone: values.phone,
            },
        },
    });
};

// Login
export const signInUser = async (values: SignInFormValues) => {
    return await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
    });
};

// Logout
export const signOutUser = async () => {
    return await supabase.auth.signOut();
};