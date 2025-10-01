import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { AsinStatusData } from "./types";

export const useAsinStatus = () => {
  const { user, loading: authLoading } = useAuth();
  const [statusData, setStatusData] = useState<AsinStatusData>({});
  const [dataLoading, setDataLoading] = useState(false);
  const [saving, setSaving] = useState<string | null>(null);

  // Load checked ASINs from Firebase
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

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        loadedStatusData[doc.id] = {
          checked: data.checked || false,
          updatedAt: data.updatedAt?.toDate?.()?.toISOString() || null,
        };
      });

      setStatusData(loadedStatusData);
    } catch (error) {
      console.error("Error loading checked ASINs:", error);
    } finally {
      setDataLoading(false);
    }
  };

  // Save ASIN status to Firebase
  const saveAsinStatus = async (asin: string, checked: boolean) => {
    if (!user) return;

    setSaving(asin);

    try {
      const asinRef = doc(db, "users", user.uid, "checkedAsins", asin);
      await setDoc(asinRef, {
        checked,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error saving ASIN status:", error);
      // Revert the local state on error
      setStatusData((prev) => ({
        ...prev,
        [asin]: {
          checked: !checked,
          updatedAt: prev[asin]?.updatedAt || null,
        },
      }));
    } finally {
      setSaving(null);
    }
  };

  const handleStatusToggle = async (asin: string) => {
    const currentStatus = statusData[asin];
    const newChecked = !currentStatus?.checked;

    // Optimistically update the UI
    setStatusData((prev) => ({
      ...prev,
      [asin]: {
        checked: newChecked,
        updatedAt: new Date().toISOString(),
      },
    }));

    // Save to Firebase
    await saveAsinStatus(asin, newChecked);
  };

  // Load data when user changes
  useEffect(() => {
    loadCheckedAsins();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    statusData,
    loading: authLoading || dataLoading,
    saving,
    handleStatusToggle,
    user,
  };
};
