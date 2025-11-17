import React, { useState } from "react";
import { SubscriberDataType } from "../data/subs";
import SubscriberTable from "../tables/subscriberTable";
import TotalSubscriber from "../cards/total-subscriber";
import TotalRevenue from "../cards/total-revenue";
import PendingRenewals from "../cards/pending-renewals";
import TotalUsers from "../cards/total-users";
import SubscriberRate from "../cards/subscriber-rate";

const Subscriber = () => {
  const [selectedUser, setSelectedUser] = useState<SubscriberDataType | null>(
    null
  );
  const [modalType, setModalType] = useState<string | null>(null);

  const closeModal = () => setModalType(null);

  const openModalHandler = (data: SubscriberDataType, type: string) => {
    setSelectedUser(data);
    setModalType(type);
  };

  return (
    <div>
      <div className="bg-gray-200 min-h-screen p-2">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg p-2">
            <TotalSubscriber />
          </div>

          <div className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg p-2">
            <TotalRevenue />
          </div>

          <div className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg p-2">
            <PendingRenewals />
          </div>

          <div className="flex flex-col w-1/4 bg-white rounded-lg shadow-lg p-2">
            <TotalUsers />
          </div>
        </div>

        <div className="flex justify-center items-start gap-4 mt-10">
          <div className="w-2/3 bg-white rounded-lg shadow-lg p-6 min-h-[400px]">
            <SubscriberRate />
          </div>

          <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-1/3 min-h-[400px]">
            <p className="text-2xl font-semibold text-orange-500">
              Recent Subscribers
            </p>
            <p className="text-gray-500">Total 6 subscriber</p>
            <SubscriberTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
