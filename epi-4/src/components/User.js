function User({ name }) {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Name: <span className="font-normal">{name}</span>
      </h2>
      <h3 className="text-lg text-gray-700 mb-1">📍 Location</h3>
      <p className="text-gray-600">✉️ Email</p>
    </div>
  );
}

export default User;
