export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <h2 htmlFor={id}>{label}</h2>
      <input id={id} name={id} required {...props} />
    </p>
  );
}