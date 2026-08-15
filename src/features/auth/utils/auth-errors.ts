
export function getReadableAuthError(message: string): string {
    if (message.includes("already registered")) {
        return "هذا البريد الإلكتروني مرتبط بحساب بالفعل.";
    }

    if (message.includes("Invalid login credentials")) {
        return "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
    }

    return "تعذر إتمام العملية حاليًا. يرجى المحاولة مرة أخرى.";
}