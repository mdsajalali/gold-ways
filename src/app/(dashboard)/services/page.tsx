"use client";
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import UserPortfolioGraph from '@/components/UserPortfolioGraph';

const Service = () => {
  const portfolioData = {
    dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    goldValues: [1000, 1200, 1300, 1250, 1400, 1500],
    silverValues: [500, 600, 650, 630, 700, 750],
    totalValues: [1500, 1800, 1950, 1880, 2100, 2250],
  };
  // State for exchange preview and history
  const [exchangeInput, setExchangeInput] = useState('');
  const [exchangeOutput, setExchangeOutput] = useState(0); // Change to 0 (number)
  const [exchangeHistory, setExchangeHistory] = useState([
    { type: 'BDT to USD', rate: 0.012, input: 1000, output: 12, fee: 0.5 },
    { type: 'Gold 22k to Silver 18k', rate: 1.2, input: 5, output: 6, fee: 0.7 }
  ]);

  // State for loan and rental
  const [loanAmount, setLoanAmount] = useState('');
  const [rentalInput, setRentalInput] = useState({ quantity: '', duration: '' });
  const [rentalIncome, setRentalIncome] = useState(0);

  // Mock data for rates
  const exchangeRate = 0.013;
  const loanRate = 0.05;
  const rentalRate = 0.02;

  const handleExchange = () => {
    // Mock exchange logic
    setExchangeOutput(parseFloat(exchangeInput) * exchangeRate); // Ensure exchangeInput is a number
  };

  const handleLoanCalculation = () => {
    setLoanAmount(loanRate * parseFloat(loanAmount)); // Ensure loanAmount is a number
  };

  const handleRental = () => {
    setRentalIncome(parseFloat(rentalInput.quantity) * rentalRate); // Ensure rentalInput.quantity is a number
  };
  
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'reminder', message: 'Your payment of 500 BDT is due in 3 days.', isRead: false },
    { id: 2, type: 'offer', message: 'Special Offer: Get 10% off on Gold exchanges this week!', isRead: false },
    { id: 3, type: 'rate-alert', message: 'Gold rate has increased by 0.5%.', isRead: false },
  ]);

  // Mark a notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  // Remove notification
  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="container mx-auto p-6 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="container mx-auto p-6">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Portfolio</h2>
        <UserPortfolioGraph portfolioData={portfolioData} />
      </section>
    </div>
      {/* Asset & Currency Exchange */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Asset & Currency Exchange Rate</h2>
        
        {/* Exchange Interface */}
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Exchange Rate Interface</h3>
          <input
            type="number"
            value={exchangeInput}
            onChange={(e) => setExchangeInput(e.target.value)}
            placeholder="Enter amount"
            className="px-4 py-2 mb-2 w-full rounded-lg border border-neutral-300 dark:border-neutral-700"
          />
          <p className="text-sm">Rate Preview: {exchangeRate} | Fee: 0.5%</p>
          
        </div>

        {/* Conversion Preview */}
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Conversion Preview</h3>
          <p>Input: {exchangeInput}</p>
          <p>Output: {exchangeOutput ? exchangeOutput.toFixed(2) : '0.00'}</p>
          <p>Fees: {exchangeOutput ? (exchangeOutput * 0.005).toFixed(2) : '0.00'}</p>
        </div>

        {/* Exchange History */}
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Exchange History</h3>
          <ul>
            {exchangeHistory.map((exchange, index) => (
              <li key={index} className="py-2 border-b border-neutral-300 dark:border-neutral-700">
                <p>Type: {exchange.type}</p>
                <p>Rate: {exchange.rate}</p>
                <p>Input: {exchange.input} | Output: {exchange.output} | Fee: {exchange.fee}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* notification  */}

      <div className="container mx-auto p-6 dark:bg-neutral-900 dark:text-neutral-100">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Notifications & Alerts</h2>

        {/* Notification List */}
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Your Notifications</h3>
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id} className={`py-2 border-b border-neutral-300 dark:border-neutral-700 ${notification.isRead ? 'bg-neutral-200 dark:bg-neutral-600' : ''}`}>
                <div className="flex justify-between items-center">
                  <div className={`text-sm ${notification.type === 'reminder' ? 'text-red-500' : notification.type === 'offer' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {notification.message}
                  </div>
                  <div className="ml-4">
                    {!notification.isRead && (
                      <button onClick={() => markAsRead(notification.id)} className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs">
                        Mark as Read
                      </button>
                    )}
                    <button onClick={() => removeNotification(notification.id)} className="ml-2 text-red-600 text-xs">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>



      {/* Other sections remain the same... */}
    </div>
  );
};

export default Service;





// interface Loan {
//   amount: number;
//   status: string;
//   collateral: string;
//   interestRate: number;
//   repaymentSchedule: string;
// }

// interface Rental {
//   name: string;
//   income: number;
//   rentalPrice: number;
//   duration: number;
//   terms: string;
// }

// interface Payment {
//   type: string;
//   date: string;
//   recurring: boolean;
//   reminder: boolean;
// }

// const Services: React.FC = () => {
//   const [loanStatus, setLoanStatus] = useState<Loan[]>([]);
//   const [rentedAssets, setRentedAssets] = useState<Rental[]>([]);
//   const [paymentHistory, setPaymentHistory] = useState<Payment[]>([]);
//   const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
//   const [selectedRental, setSelectedRental] = useState<Rental | null>(null);
//   const [paymentType, setPaymentType] = useState<string>("Loan");
//   const [paymentDate, setPaymentDate] = useState<string>("");
//   const [recurring, setRecurring] = useState<boolean>(false);
//   const [reminder, setReminder] = useState<boolean>(false);

//   const handleLoanDetails = (loan: Loan) => {
//     setSelectedLoan(loan);
//   };

//   const handleRentalAgreement = (rental: Rental) => {
//     setSelectedRental(rental);
//   };

//   const handleSchedulePayment = () => {
//     const newPayment: Payment = {
//       type: paymentType,
//       date: paymentDate,
//       recurring,
//       reminder,
//     };
//     setPaymentHistory([...paymentHistory, newPayment]);
//     // Reset form fields after scheduling
//     setPaymentDate("");
//     setRecurring(false);
//     setReminder(false);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Gold Trading */}
//       <GoldTrading />
//       {/* Loan Management Section */}
//       <section className="mb-8">
//         <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
//           Loan Management
//         </h2>

//         {/* Loan Status Overview Screen */}
//         <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
//           <h3 className="mb-4 text-xl font-semibold">Loan Status Overview</h3>
//           <ul className="space-y-2">
//             {loanStatus.map((loan, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between border-b py-2"
//               >
//                 <span className="text-gray-900 dark:text-white">
//                   {loan.amount} - Status: {loan.status}
//                 </span>
//                 <button
//                   onClick={() => handleLoanDetails(loan)}
//                   className="text-blue-500 hover:underline"
//                 >
//                   View Details
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Loan Details Screen */}
//         {selectedLoan && (
//           <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
//             <h3 className="mb-4 text-xl font-semibold">Loan Details</h3>
//             <p className="text-gray-900 dark:text-white">
//               Loan Amount: {selectedLoan.amount}
//             </p>
//             <p className="text-gray-900 dark:text-white">
//               Collateral: {selectedLoan.collateral}
//             </p>
//             <p className="text-gray-900 dark:text-white">
//               Status: {selectedLoan.status}
//             </p>
//             <p className="text-gray-900 dark:text-white">
//               Interest Rate: {selectedLoan.interestRate}
//             </p>
//             <p className="text-gray-900 dark:text-white">
//               Repayment Schedule: {selectedLoan.repaymentSchedule}
//             </p>
//             <button
//               onClick={() => setSelectedLoan(null)}
//               className="mt-2 rounded-lg bg-red-600 px-4 py-2 text-white shadow-lg hover:bg-red-500"
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Rental Management Section */}
//       <section className="mb-8">
//         <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
//           Rental Management
//         </h2>

//         {/* Rental Overview Screen */}
//         <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
//           <h3 className="mb-4 text-xl font-semibold">Rental Overview</h3>
//           <ul className="space-y-2">
//             {rentedAssets.map((rental, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between border-b py-2"
//               >
//                 <span className="text-gray-900 dark:text-white">
//                   {rental.name} - Income: {rental.income}
//                 </span>
//                 <button
//                   onClick={() => handleRentalAgreement(rental)}
//                   className="text-blue-500 hover:underline"
//                 >
//                   View Agreement
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Rental Agreement Screen */}
//         {selectedRental && (
//           <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
//             <h3 className="mb-4 text-xl font-semibold">Rental Agreement</h3>
//             <p className="text-gray-900 dark:text-white">
//               Asset: {selectedRental.name}
//             </p>
//             <p className="text-gray-900 dark:text-white">
//               Rental Price: {selectedRental.rentalPrice}
//             </p>
//             <p className="text-gray-900 dark:text-white">
//               Duration: {selectedRental.duration} days
//             </p>
//             <p className="text-gray-900 dark:text-white">
//               Terms: {selectedRental.terms}
//             </p>
//             <button
//               onClick={() => setSelectedRental(null)}
//               className="mt-2 rounded-lg bg-red-600 px-4 py-2 text-white shadow-lg hover:bg-red-500"
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Payment Scheduling Section */}
//       <section className="mb-8">
//         <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
//           Payment Scheduling
//         </h2>

//         {/* Payment Schedule Setup Screen */}
//         <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
//           <h3 className="mb-4 text-xl font-semibold">Payment Schedule Setup</h3>
//           <select
//             value={paymentType}
//             onChange={(e) => setPaymentType(e.target.value)}
//             className="mb-4 w-full rounded border p-2"
//           >
//             <option value="Loan">Loan</option>
//             <option value="Asset Purchase">Asset Purchase</option>
//           </select>
//           <input
//             type="date"
//             value={paymentDate}
//             onChange={(e) => setPaymentDate(e.target.value)}
//             className="mb-4 w-full rounded border p-2"
//           />
//           <div className="mb-4 flex items-center">
//             <input
//               type="checkbox"
//               checked={recurring}
//               onChange={() => setRecurring(!recurring)}
//               className="mr-2"
//             />
//             <label>Recurring Payment</label>
//           </div>
//           <div className="mb-4 flex items-center">
//             <input
//               type="checkbox"
//               checked={reminder}
//               onChange={() => setReminder(!reminder)}
//               className="mr-2"
//             />
//             <label>Set Reminder</label>
//           </div>
//           <button
//             onClick={handleSchedulePayment}
//             className="mt-2 rounded-lg bg-yellow-500 px-4 py-2 text-black shadow-lg duration-300 hover:bg-yellow-600"
//           >
//             Schedule Payment
//           </button>
//         </div>

//         {/* Payment History Screen */}
//         <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
//           <h3 className="mb-4 text-xl font-semibold">Payment History</h3>
//           <ul className="space-y-2">
//             {paymentHistory.map((payment, index) => (
//               <li key={index} className="border-b py-2">
//                 <span className="text-gray-900 dark:text-white">
//                   {payment.type} - Date: {payment.date} - Recurring:{" "}
//                   {payment.recurring ? "Yes" : "No"} - Reminder:{" "}
//                   {payment.reminder ? "Yes" : "No"}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;
