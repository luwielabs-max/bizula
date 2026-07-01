import { LButton, LInput } from "../../../lib/luwie-ui";

export default function ForgotPasswordForm({
  email,
  setEmail,
  onSubmit,
}) {
  return (
    <div className="space-y-5">

      <LInput
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <LButton
        className="w-full h-12 rounded-xl"
        onClick={onSubmit}
      >
        Send Reset Link
      </LButton>

    </div>
  );
}