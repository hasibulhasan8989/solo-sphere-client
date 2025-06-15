import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TabComponent = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/jobs").then((res) => {
      setJobs(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto my-20">
      <Tabs>
        <div className="flex justify-center mb-20">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {jobs
              .filter((job) => job.category === "Web Development")
              .map((job) => (
                <JobCard job={job} key={job._id} ></JobCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {jobs
              .filter((job) => job.category === "Graphics Design")
              .map((job) => (
                <JobCard job={job} key={job._id}></JobCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {jobs
              .filter((job) => job.category === "Digital Marketing")
              .map((job) => (
                <JobCard job={job} key={job._id}></JobCard>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabComponent;
