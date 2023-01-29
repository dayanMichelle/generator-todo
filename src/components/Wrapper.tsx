import "./wrapper.css";

type WrapperProps = {
  children: React.ReactNode;
};
export function Wrapper({ children }: WrapperProps) {
  return <>{children}</>;
}
