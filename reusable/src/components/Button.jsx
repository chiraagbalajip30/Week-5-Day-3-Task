const Button = ({ text }) => {
  return (
    <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
      {text}
    </button>
  );
};

export default Button;
