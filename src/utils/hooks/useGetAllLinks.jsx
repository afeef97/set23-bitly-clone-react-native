import { useContext, useEffect, useState } from "react";
import { getAllLinks } from "../api";

const useGetAllLinks = (jwt, deps = []) => {
    const [linkState, setLinkState] = useState("pending");
    const [links, setLinks] = useState([]);

    const fetchLinks = async () => {
        try {
            setLinkState("loading");
            const resData = await getAllLinks(jwt);
            setLinks(resData.data.links);
            setLinkState("success");
        } catch (error) {
            console.log(error);
            setLinkState("error");
        }
    };

    useEffect(() => {
        fetchLinks();
    }, [...deps]);

    return { links, linkState, fetchLinks };
};

export default useGetAllLinks;
