import React from "react";
import Seminar from "./Seminar";
import Essay from "./Essay";
import Opinion from "./Opinion";

const Talks = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Activities</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Editorial Board Member of Journals

</h2>
          <div className="space-y-2 text-gray-700">
            <p>
                <ol className='list-decimal list-inside space-y-3'>
                    <li>X</li>
                    <li>Y</li>
                    <li>Z</li>
                </ol>
                
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Reviewer of Journals

</h2>
          <div className="space-y-2 text-gray-700">
            <p>
                <ol className='list-decimal list-inside space-y-3'>
                    <li>Scientific Reports</li>
                    <li>Cluster Computing</li>
                    <li>Signal, Image and Video Processing</li>
                    <li>IEEE Access</li>
                    <li>IEEE Transactions on Circuits and Systems for Video Technology</li>
                    <li>IEEE Sensors Journal</li>
                    <li>Security and Communication Networks, Hindawi</li>
                    <li>International Journal of Engineering Research & Technology</li>
                    <li>Journal of advances in science and technology</li>
                    <li>Journal of Advances in Science and Technology (JAST)</li>
                </ol>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Program and Organizing Chair:

</h2>
          <div className="space-y-2 text-gray-700">
            <p>
                <ol className='list-decimal list-inside space-y-3'>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ol>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Publication and Organizing Chair

</h2>
          <div className="space-y-2 text-gray-700">
            <p>
            <ol className='list-decimal list-inside space-y-3'>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ol>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Program Chair:

</h2>
          <div className="space-y-2 text-gray-700">
            <p>
            <ol className='list-decimal list-inside space-y-3'>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ol>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Technical Program Committee Member:

</h2>
          <div className="space-y-2 text-gray-700">
            <p>
            <ol className='list-decimal list-inside space-y-3'>
                    <li>The 2nd International Symposium on Artificial Intelligence (ISAI) March 05-07, 2025, NIT SIKKIM, RAVANGLA, INDIA</li>
                    <li>International Conference named Communication, Devices and Computing (ICCDC-2017)</li>
                    <li>C</li>
                </ol>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">MEMBERSHIPS:

</h2>
          <div className="space-y-2 text-gray-700">
            <p>
            <ol className='list-decimal list-inside space-y-3'>
                    <li>IEEE Council on RFID (Since 2025 Member/Customer number: 92156366)</li>
                    <li>IEEE Biometrics Council  (Since 2025 Member/Customer number: 92156366)</li>
                    <li>IEEE Council on Electronic Design Automation  (Since 2025 Member/Customer number: 92156366)</li>
                </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
      <Seminar />
      <Essay />
      <Opinion />
    </>
  );
};

export default Talks;
