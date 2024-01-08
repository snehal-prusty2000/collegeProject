import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            1. System Enhancements:
            Our development team has been diligently working to improve the functionality
            and user experience of the system. These enhancements include real-time inventory tracking,
            automated notifications, and advanced user access controls. We believe these upgrades will significantly
            boost the efficiency of your day-to-day operations.

            2. New Features:
            We are thrilled to introduce new features that empower administrators. Real-time
            inventory tracking allows you to monitor blood levels instantly, automated notifications
            provide timely alerts for critical events, and user access controls offer customizable roles and
            permissions for enhanced security.

            3. Security Measures:
            Your data security is our top priority. Our latest update includes reinforced
            security measures to protect sensitive information. These measures are designed to ensure
            the confidentiality and integrity of the data stored in the Blood Bank Management System.

            4. Training Sessions:
            To ensure a smooth transition and maximize the benefits of these updates,
            we will be conducting training sessions. These sessions will cover the new features,
            system functionalities, and best practices. Your participation is highly encouraged to make
            the most of these learning opportunities.

            5. Feedback and Support:
            Your feedback is invaluable to us. If you encounter any issues, have suggestions,
            or need assistance, our support team is ready to help. We are committed to addressing
            your concerns promptly and continuously refining the Blood Bank Management System based on your input.

            6. Future Roadmap:
            Looking forward, we have an ambitious roadmap that includes predictive analytics,
            additional customization options, and integrations with emerging technologies. Your collaboration
            and feedback will play a pivotal role in shaping these future developments.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
