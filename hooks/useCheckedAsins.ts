import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AsinStatusData } from "../components/asins/types";

export const useCheckedAsins = () => {
  const { user, loading: authLoading } = useAuth();
  const [checkedAsins, setCheckedAsins] = useState<string[]>([]);
  const [statusData, setStatusData] = useState<AsinStatusData>({});
  const [dataLoading, setDataLoading] = useState(false);

  // Load only checked ASINs from Firebase
  const loadCheckedAsins = async () => {
    if (!user) {
      setDataLoading(false);
      return;
    }

    setDataLoading(true);
    try {
      const checkedAsinsRef = collection(db, "users", user.uid, "checkedAsins");
      const querySnapshot = await getDocs(checkedAsinsRef);

      const loadedStatusData: AsinStatusData = {};
      const loadedCheckedAsins: string[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const asinStatus = {
          checked: data.checked || false,
          updatedAt: data.updatedAt?.toDate?.()?.toISOString() || null,
        };

        loadedStatusData[doc.id] = asinStatus;

        // Only add to checked ASINs if it's actually checked
        if (asinStatus.checked) {
          loadedCheckedAsins.push(doc.id);
        }
      });

      setStatusData(loadedStatusData);
      setCheckedAsins(loadedCheckedAsins);
    } catch (error) {
      console.error("Error loading checked ASINs:", error);
    } finally {
      setDataLoading(false);
    }
  };

  // Load data when user changes
  useEffect(() => {
    loadCheckedAsins();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    checkedAsins,
    statusData,
    loading: authLoading || dataLoading,
    user,
  };
};
