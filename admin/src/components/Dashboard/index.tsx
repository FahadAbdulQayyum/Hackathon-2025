"use client"

import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/components/lib/hooks";
import { RootState } from '@/components/lib/store';
import { dataType, DynamicAPI, fetchDynamicAPIs } from '@/components/lib/features/dynamicApiCall/dynamicAPISlice';
import Image from 'next/image';

const Dashboard = ({ type, definedField }: { type: string, definedField: string[] }) => {

    // const [data, setData] = useState<dataType[]>([]);
    const [data, setData] = useState<DynamicAPI[]>([]);
    const [loading, setLoading] = useState(true);
    // const [data, setData] = useState([]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const apiResult = async () => {
            setLoading(true)
            const api = await dispatch(
                fetchDynamicAPIs({
                    // collectionType: "job", // Replace with your collection type
                    collectionType: type, // Replace with your collection type
                    // specificFields: ["name", "variation", "currently_offered", "pic", "city_available", "price", "agent_chosen", "time"], // Replace with needed fields
                    // specificFields: ["_id", "name", "city_available", "selected_services_list", "agent_chosen", "_createdAt", "time"], // Replace with needed fields
                    specificFields: definedField, // Replace with needed fields
                })
            )
            console.log('...api...', api.payload);
            if (api.payload) {
                setData(api.payload as DynamicAPI[]); // Ensure TypeScript knows it's an array
                setLoading(false)
            }
        }
        apiResult();
    }, [])

    if (loading) {
        return <div className="flex justify-center items-center h-screen relative">
            <div className="loader  border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
        </div>;
    }

    return (
        <div
            // className="space-y-1 px-standardSize"
            className="space-y-1"
        >
            {
                data && data.map((v, i) => <div key={v._id} className="bg-gray-200 hover:bg-gray-300 p-2 rounded shadow">
                    <span className="flex items-center space-x-2">
                        <Image
                            // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Faccount-icon-vector&psig=AOvVaw2xa2q7Kmakbe9RAGIfLLnW&ust=1738872681858000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiC2turrYsDFQAAAAAdAAAAABAE" alt="logo"
                            src="/assets/account.png"
                            // src="/assets/account.webp"
                            alt="logo"
                            width={30}
                            height={30} />
                        <span
                            className="flex flex-col space-y-1"
                        >
                            <div className="text-sm">{v.name}</div>
                            <div className="text-base">{v._createdAt}</div>
                        </span>
                    </span >
                </div>
                )
            }
        </div >
    )
}

export default Dashboard
