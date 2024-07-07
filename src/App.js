import React, { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState(
    "This Course is very awesome,recently i buy this course such a awesome content ,and in this website many features are there like refer frnds to Earn benefits in Courses."
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setReferrerName("");
    setReferrerEmail("");
    setRefereeName("");
    setRefereeEmail("");
    setCourse("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          referrerName,
          referrerEmail,
          refereeName,
          refereeEmail,
          course,
          message,
        }),
      });

      if (response.ok) {
        console.log("Referral submitted successfully!");
        handleClose();
      } else {
        console.error("Failed to submit referral:", response.status);
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex  flex-wrap mb-6 justify-center md:justify-between gap-6">
        {/*REfer benefits  Box 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 w-44 h-44">
          <p className="text-base text-blue font-roboto font-normal leading-22 text-center text-blue-800">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>

        {/*Refer Box 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 w-44 h-44">
          <p className="text-base font-roboto font-normal leading-22 text-center text-blue-800">
            Earn rewards once your referral joins an Accredian program.
          </p>
        </div>

        {/*refer  Box 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 w-44 h-44">
          <p className="text-base font-roboto font-normal leading-22 text-center text-blue-800">
            Both parties receive a bonus 30 days after program enrollment.
          </p>
        </div>
      </div>

      {/* Refer Now Section */}
      <section className="bg-white mt-4 p-8 rounded-lg shadow-md text-center mt-6 md:mt-0">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Refer & Earn</h1>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          onClick={handleOpen}
        >
          Refer Now
        </button>
      </section>

      {/* Referral Form Modal */}
      {open && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Referral Form
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={referrerName}
                onChange={(e) => setReferrerName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={referrerEmail}
                onChange={(e) => setReferrerEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Enter your frnd Name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={refereeName}
                onChange={(e) => setRefereeName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Enter your Friend's Email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={refereeEmail}
                onChange={(e) => setRefereeEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Course to be Referred Eg:- MERN stack ,Python ,Java"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              />
              <textarea
                placeholder="Message (optional)"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg mr-2 hover:bg-gray-400 shadow-md"
                  onClick={handleClose}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
