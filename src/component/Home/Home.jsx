import { useEffect, useState } from "react";
import Layout from "./../../Layout/Layout";
import Attendance from "./Attendance";
import Homework from "./Homework";
import BehavioralAnalytics from "./BehavioralAnalytics";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("data.json")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  console.log(data);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <div className=" container mx-auto">
        <h1 className="font-bold mt-5">HELLO! {data?.NAME}</h1>

        {/* Attendance section  */}
        <div>
          <h1 className="text-center font-semibold my-5 text-2xl">
            Attendance
          </h1>
          <Attendance data={data}></Attendance>
        </div>

        {/* Homeworks and BehavioralAnalytics section  */}
        <div className="flex flex-col lg:flex-row justify-center mt-10 mb-20 lg:p-0 p-5 gap-10">
          <div className="flex justify-center">
            <div className="bg-gray-300 w-[500px] h-[350px] font-bold ">
              <div className="text-center mt-3 ">Homeworks</div>
              <div className="">
                {data.homework?.map((subject, index) => (
                  <Homework key={index} subject={subject}></Homework>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:p-0 p-10 lg:w-[800px] lg:h-[350px] bg-gray-300">
            <div className="lg:flex justify-center ">
              <BehavioralAnalytics
                className=""
                data={data}
              ></BehavioralAnalytics>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
