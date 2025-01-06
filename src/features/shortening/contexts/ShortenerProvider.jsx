import { ShortenerContext } from "./ShortenerContext";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { API_BASE_URL } from "@/config.js";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ShortenerProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage("links");
  const [shortenedLinks, setShortenedLinks] = useState(getItem() || []);
  const [error, setError] = useState("");

  useEffect(() => {
    setItem(shortenedLinks);
  }, [shortenedLinks, setItem]);

  const shortenLink = async (link) => {
    try {
      const res = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          url: link,
        }),
      });

      const data = await res.json();

      if (res.ok && data.short_url) {
        setShortenedLinks((prev) => [
          ...prev,
          {
            id: shortenedLinks.length + 1,
            originalLink: link,
            shortedLink: data.short_url,
          },
        ]);
      } else {
        setError(
          data.error || "There was an error when trying to shorten the URL."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ShortenerContext.Provider value={{ shortenedLinks, shortenLink, error }}>
      {children}
    </ShortenerContext.Provider>
  );
};

ShortenerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
