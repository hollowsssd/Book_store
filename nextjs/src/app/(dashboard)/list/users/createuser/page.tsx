"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateUser() {
    const router = useRouter();

    const [UserData, SetUserData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        password: "",
        is_admin: "",
    });
    const changeUserFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetUserData({
            ...UserData,
            [e.target.name]: e.target.value
        });
    };



    const onSubmitChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", UserData.name);
            formData.append("email", UserData.email);
            formData.append("address", UserData.address);
            formData.append("phone", UserData.phone);
            formData.append("password", UserData.password);
            formData.append("is_admin", UserData.is_admin?"1":"0");


            console.log("Data:", Array.from(formData.entries()));
            const res = await axios.post(`http://127.0.0.1:8000/api/AddUsers`,
                formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

              console.log("success",res);
            toast.success("User created!", { position: "top-right" });
            setTimeout(() => {
                router.push("/list/users");
            }, 1500);

        } catch (error) {
            console.log("something with wrong", error);
            toast.error("Email already exists! Pls change", { position: "top-right" });

        }
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-10 rounded-xl shadow-md mt-4">
            <h2 className="text-2xl font-semibold text-center mb-4">Create User</h2>
            <form onSubmit={onSubmitChange}>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={UserData.name}
                            onChange={changeUserFieldHandler}
                            className="input input-bordered w-full"
                            placeholder="Enter name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={UserData.email}
                            onChange={changeUserFieldHandler}
                            className="input input-bordered w-full"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={UserData.password}
                            onChange={changeUserFieldHandler}
                            className="input input-bordered w-full"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={UserData.address}
                            onChange={changeUserFieldHandler}
                            className="input input-bordered w-full"
                            placeholder="Enter address"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={UserData.phone}
                            onChange={changeUserFieldHandler}
                            className="input input-bordered w-full"
                            placeholder="Enter phone"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Role: </label>
                        <select
                            name="is_admin"
                            value={UserData.is_admin}
                            onChange={(e) => SetUserData({ ...UserData, is_admin: e.target.value })}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="0">User</option>
                            <option value="1">Admin</option>

                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-full mt-4"
                    >
                        Create
                    </button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};