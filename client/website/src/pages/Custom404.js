import React from "react";
import PayPal from "../components/PayPal";

export default function Custom404() {
    return (
        <div>
            <p> This is the 404 Page </p>
            <PayPal
                membershipTitle="Nun/Student/Unemployed"
                membershipID={1}
                membershipCost={15}
                donationAmount={0}
                isNewMember
                address="2469 Random"
                affiliatedOrgs="affiliated org 1"
                disable={false}
                transactionCompleted={() => {
                    alert("completed transaction yay");
                }}
            />
        </div>
    );
}
