import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { getAuthenticated } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Profile = () => {
  const authenticated = useSelector(getAuthenticated);
  const navigate = useNavigate();
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!authenticated) {
      timeout.current = setTimeout(() => {
        navigate("/login");
      }, 1500);
      return () => {
        clearTimeout(timeout.current);
      };
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <Layout centered>
        <div className="text-center">No authenticated. Redirecting...</div>
      </Layout>
    );
  }

  return <Layout>Private information after auth</Layout>;
};

export default Profile;
