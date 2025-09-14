import { useEffect, useState } from "react";

function useUserOnlineStatus(params) {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(function () {
    function handleOnline(params) {
      setOnlineStatus(true);
    }
    function handleOffline(params) {
      setOnlineStatus(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineStatus;
}

export default useUserOnlineStatus;
