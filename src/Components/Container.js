export default function Container({ children, className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <div className={`w-10/12 py-28 mx-auto ${addClassName}`}>{children}</div>
  );
}
