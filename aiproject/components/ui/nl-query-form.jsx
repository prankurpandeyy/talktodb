"use client";
import React, { useState, useEffect } from "react";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import axios from "axios";
import { Tabledata } from "./Tabledata";

function NLQueryForm() {
  const [nlQuery, setNlQuery] = useState("");
  const [data, setData] = useState([]);
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.NEXT_PUBLIC_RESTDB_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_RESTDB_BASE_URL;
 
  useEffect(() => {
    async function fetchData() {
      if (!API_KEY || !BASE_URL) {
        setError("API configuration is missing");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(BASE_URL, {
          headers: {
            "x-apikey": API_KEY,
            "Content-Type": "application/json",
          },
        });

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    }
    fetchData();
  }, [API_KEY, BASE_URL]);

  useCopilotReadable({
    description: "Query database with detailed information",
    value: JSON.stringify(data.slice(0, 25)),
  });

  useCopilotAction({
    name: "fetchData",
    description: "Search and filter data based on natural language query",
    parameters: [
      {
        name: "nlQuery",
        type: "string",
        description: "Natural language search term for database",
        required: true,
      },
    ],

    handler: async ({ data }) => {
      setNlQuery(data);
      return JSON.stringify(data);
    },
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <p className="text-sm text-green-600 font-bold text-center">
          Live data from database.
        </p>
        <p className="text-sm text-green-600 font-bold text-center">
          Total Records: {data.length}
        </p>

        <Tabledata data={data} />
      </div>
    </div>
  );
}
export default NLQueryForm;
