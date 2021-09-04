export default function Button({ children }) {
  return (
    <button className="bg-button-color hover:bg-opacity-80 font-semibold px-6 py-2 rounded-md">
      {children}
    </button>
  );
}
