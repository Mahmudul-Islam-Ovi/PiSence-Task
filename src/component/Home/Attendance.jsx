const Attendance = ({ data }) => {
  return (
    <div className="p-5 bg-gray-300 ">
      <div className="overflow-x-auto mt-10 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="uppercase  ">
              {Object.entries(data.ATTENDANCE).map(([day, data]) => (
                <th key={day}>
                  <p className="text-[20px] font-semibold text-black">{day}</p>
                  <p className="my-2 ml-5 text-[10px] text-black">{data.date}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="w-8 h-8 bg-green-500"></div>
              </th>
              <th>
                <div className="w-8 h-8   bg-green-500"></div>
              </th>
              <th>
                <div className="w-8 h-8   bg-green-500"></div>
              </th>
              <th>
                <div className="w-8 h-8   bg-red-600"></div>
              </th>
              <th>
                <div className="w-8 h-8   bg-red-600"></div>
              </th>
              <th>FN</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>
                <div className="w-8 h-8   bg-red-600"></div>
              </th>
              <th>
                <div className="w-8 h-8 bg-green-500"></div>
              </th>
              <th>
                <div className="w-8 h-8   bg-green-500"></div>
              </th>
              <th>
                <div className="w-8 h-8   bg-red-600"></div>
              </th>
              <th>
                <div className="w-8 h-8   bg-red-600"></div>
              </th>
              <th>
                AN
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
