export default function ContactFormSection() {
  return (
    <div className="mt-10 w-full max-w-5xl bg-slate-800 rounded-xl border-4 border-lime-500 p-6 flex flex-col md:flex-row gap-10 relative">
      {/* Left: Form */}
      <form className="flex-1 space-y-4">
        <h3 className="text-xl font-bold">Let's connect & Transform</h3>
        <p className="text-sm text-gray-300">
          Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you achieve your goals.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-2 rounded-lg bg-slate-700 border border-gray-600"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-2 rounded-lg bg-slate-700 border border-gray-600"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded-lg bg-slate-700 border border-gray-600"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 rounded-lg bg-slate-700 border border-gray-600"
        />
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full p-2 rounded-lg bg-slate-700 border border-gray-600"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 text-white px-4 py-2 rounded-lg w-full"
        >
          Send it to the moon 🚀
        </button>
        <p className="text-sm text-gray-400 text-center">
          By sending this form, you agree to our{" "}
          <a href="#" className="underline text-white">Privacy Policy</a>.
        </p>
      </form>

      {/* Right: Blue Box with Image */}
      <div className="flex-1 relative flex items-center justify-center bg-gray-900 rounded-lg">
        <img
          src="/click.png"
          alt="Visual"
          className="max-w-full max-h-full object-contain p-4"
        />
      </div>
    </div>
  );
}