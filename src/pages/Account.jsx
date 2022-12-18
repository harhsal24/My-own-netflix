import React from "react";
import SavedShows from "../components/SavedShows";
import "../pages/style/Account.css";
import { IoHeartSharp } from "react-icons/io5";
import WatchLater from "../components/WatchLater";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../pages/style/TAB.css";
import { BsBookmarkDashFill } from "react-icons/bs";

function Account() {
  return (
    <>
      <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>


      <Tabs>
        <TabList>
          <Tab>
            FAV Shows
            <span className="text-xl inline-block">
              <IoHeartSharp />
            </span>
          </Tab>
          <Tab>
            Watch Later
            <span className="text-xl inline-block">
              <BsBookmarkDashFill />
            </span>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>
            <SavedShows />
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <WatchLater />
          </h2>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Account;
