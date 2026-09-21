'use client'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { FaRocket } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  const showToast = () => {
    toast.success('DaisyUI, Icons and Toast working correctly!');
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-5">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2 mb-4">
          <FaRocket className="text-primary" /> Welcome Mehedi
        </h1>

        <p className="text-gray-600 mb-6">
          Tailwind CSS, DaisyUI, React Icons and React Toastify set up successfully
        </p>

        {/* DaisyUI Button with React Icon */}
        <button onClick={showToast} className="btn btn-primary gap-2">
          <FaCheckCircle /> Test Toast Notification
        </button>
      </div>
    </div>
  );
}
