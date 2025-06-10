function Button({ children, props, className }) {
  return (
    <button
      {...props}
      className={`bg-slate-400 text-white p-2 rounded-md ${className} `}
    >
      {children}
    </button>
  );
}

export default Button;
